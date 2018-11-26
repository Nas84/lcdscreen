#!groovy
pipeline {
    options {
        timestamps()
    }
    agent any
    environment {
        PACKAGE_VERSION_PREFIX='1.0'
        shunit2='/usr/share/shunit2-2.1.7'
    }
    stages {

        stage('Setup') {
            steps {
                echo 'Determine version number and build tag'
            }
        }
        
        
        stage("Code quality") {
            parallel {
        
                stage("Unit test") {
                    agent {
                        docker {
                            image 'node:10.6-alpine'
                            args '-u root'
                        }
                    }
                    steps {
                        sh '''                    
                            apk add --no-cache bash
                            rm -rf $WORKSPACE/artifacts
                            mkdir $WORKSPACE/artifacts
                            npm install
                            npm test
                        '''   
                    }
                    post {
                        always {
                            junit "artifacts/test-results.xml"
                            publishHTML([
                                allowMissing: true, 
                                alwaysLinkToLastBuild: false, 
                                keepAll: false, 
                                reportDir: 'coverage', 
                                reportFiles: 'index.html', 
                                reportName: 'Test coverage report', 
                                reportTitles: 'Test coverage report'
                                ])
                        }
                    }
                } // end Node.js testing
                
                stage("Dockerfile lint") {
                    agent {
                        docker {
                            image "hadolint/hadolint:latest-debian"
                        }
                    }
                    steps {
                        sh "hadolint Dockerfile || true"
                    }
                } // end Dockerfile lint

            } // end parallel            
        } 
        
        
        stage("Build images") {
            steps {
                sh '''
                    docker build -t lcdscreen:latest -f Dockerfile .
                '''
            }
        }
        stage ("System tests")  {
            agent {
                docker {
                    image 'lcdscreen:latest'
                }
            }
            steps{
                //Prepare test framework (shunit2)
                // this will simulate a user interactions 
                sh '''
                    apk add curl 
                    curl -L -o /tmp/v2.1.7.zip https://github.com/kward/shunit2/archive/v2.1.7.zip
                    unzip /tmp/v2.1.7.zip -d /usr/share
                '''
                //and run the test 
                sh 'sh $WORKSPACE/test/system/sys_test.sh'
                
            }
        }
        stage ("Publish")  {
            when { branch 'master' }
            steps{
                script {
                    def doPromote=true;
                    try {
                        timeout(time: 10, unit: 'MINUTES') {
                                env.RELEASE_NUMBER = input message: 'Do you want to publish this new package?', ok: 'Release!',
                                    parameters: [string(defaultValue: env.PACKAGE_VERSION, description: 'package version', name: 'version')]
                        } 
                    } catch(err) {
                        doPromote=false;
                    }  
                    if(doPromote){
                        isStable=false;
                        try {
                             timeout(time: 2, unit: 'MINUTES') {
                                 input (message: 'Do you want to tag this package as stable ?', ok: 'Yes')
                             } 
                             isStable=true;
                        } catch(err) {
                         echo "This build was published to docker but not tagged as stable"
                        } 

                        withCredentials([usernamePassword(credentialsId:'jenkins',usernameVariable: 'USER', passwordVariable:'PASSWORD')]){
                        sh '''                   
                            docker login docker.beebusiness.com:8085 --username $USER --password $PASSWORD
                            docker tag lcdscreen:latest docker.beebusiness.com:8085/lcdscreen:${RELEASE_NUMBER}
                            docker tag lcdscreen:latest docker.beebusiness.com:8085/lcdscreen:latest
                            docker push docker.beebusiness.com:8085/lcdscreen:latest
                            docker push docker.beebusiness.com:8085/pdxc-manager:${RELEASE_NUMBER}
                        
                        '''
                        if (isStable) {
                        sh '''                   
                            docker login docker.beebusiness.com --username $USER --password $PASSWORD
                            docker tag lcdscreen:latest docker.beebusiness.com/lcdscreen:stable
                            docker push docker.beebusiness.com/lcdscreen:stable
                        '''
                        }
                        // Create automatic git tag in github after each publish
                        currentBuild.description = "published: ${env.RELEASE_NUMBER} (stable tag:${isStable})"
                        echo "Create Git tag ${env.RELEASE_NUMBER}"
                        withCredentials ([
                           usernamePassword(credentialsId: 'jenkins-github', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASSWORD')])
                              { sh '''
                                gitUrlWithCreds="$(echo "${GIT_URL}" | sed -e 's!://!://'${GIT_USER}:${GIT_PASSWORD}'@!')"
                                git tag "${RELEASE_NUMBER}" "${GIT_COMMIT}"
                                git push "${gitUrlWithCreds}" "${RELEASE_NUMBER}"
                               ''' }
                        }
                    }
                }  
            }
        }
    }
     stage('deploy in pre dev') {
            steps {
                echo 'deploying in predev'
                echo 'starting smoke tests'
            }
    }
    
    stage('Stress tests pre dev') {
            steps {
                echo 'deploying in predev'
                echo 'starting smoke tests'
            }
    }
    
    stage('deploy in pre prod ') {
            steps {
                echo 'deploying in pre prod'
                echo 'starting smoke tests'
            }
    }
    
    stage('deploy in prod ') {
            steps {
                
                timeout(time: 10, unit: 'MINUTES') {
                                env.RELEASE_NUMBER = input message: 'Do you want to deploy this service ?', ok: 'Release!',
                                    parameters: [string(defaultValue: env.PACKAGE_VERSION, description: 'package version', name: 'version')]
                }
                
                echo 'deploying in pre prod'
                echo 'starting smoke tests'
            }
    }
    post {
        always {
            cleanWs()
      }
    }   
}
