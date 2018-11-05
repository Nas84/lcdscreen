# LCD screen

this project goal is to show number to a LCD screen

## Build Status
(this is a example)
- [![Build Status](https://jenkins.beebusiness.com/job/kcdscreen/job/master/badge/icon)](https://jenkins.beebusiness .com/blue/organizations/jenkins/lcdscreen)

## Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to install the following software:

* Docker Engine >= 18.06.1-ce
* node >= 10.13.0 (chose a LTS version for production)
* npm  >= 5.0.0

### Installing

A step by step that indicates how to get a development env running

```bash
git clone git@github.com:Nas84/lcdscreen.git
```
Then in the folder type
```bash
# Install dependencies
npm install
```

## Running the tests

We have several type of tests. The framework we used is Jest.

here the command for running all of our unit tests

```Bash
# Run the test
npm test
```
if you need to run only a sub domain you can type 
```Bash
# Run the test
npm test -- <pattern>
```
See details 

### Executing the CLI

In as bash shell, at the root of the folder type:
```Bash
#run the cli
./bin/lcdscreen.js -s <number>
```

or you could do:

```Bash
#run the cli
node ./bin/lcdscreen.js -s <number>
```

### Break down into systems tests

the system test executes the command from a shell.
We so, use a shell test framework for executing the command cli as an user/jenkins will do. 

First install it, download the file “shunit2” [zip](https://github.com/kward/shunit2/archive/v2.1.7.zip) and put it on your PATH somewhere. Then launch it by: 
```
chmod +x ./test/system/sys_tests.sh
./test/system/sys_tests.sh
```

## Built With

 Our stack is build with :
* [nodeJs](https://nodejs.org/en/) - The framework engine
* [Npm](https://www.npmjs.com/) - Dependency Management
* [Jest](https://jestjs.io/) - Testing framework for unit and integration
* [Shunit2](https://github.com/kward/shunit2) - Testing framework for system testing
* [Docker](https://www.docker.com/) - The deployment and runtime technology

## Contributing

Please read [CONTRIBUTING.md](./contributing.md) for details on how to support the project, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [releases on this repository](https://github.com/Nas84/lcdscreen/releases).

## Authors

* **Nasser Srairi** - 

