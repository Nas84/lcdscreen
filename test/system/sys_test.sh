#! /bin/sh

testShow() {
    echo "-- test show"
    # For
    lcdscreen.js -s 123 
    assertEquals 'Check the command line output is zero' 0 $?

    lcdscreen.js -s 1000 
    assertEquals 'Check the command line output is ten' 10 $?

    lcdscreen.js -s  
    assertEquals 'Check the command line output is ten' 1 $?

    lcdscreen.js -s "" 
    assertEquals 'Check the command line output is zero' 20 $?
}

. ${shunit2}/shunit2