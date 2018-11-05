#!/usr/bin/env node
/**
 *  entry point for the command line program
 * */ 

var program = require('commander');
let LCD = require("../lib/lcd");

program
    .usage("--show input number")
    .option('-s, --show <inputnumber>', 'number between 0-999 tp provide')
    .parse(process.argv)

/**
 * program entry point
 */
function main(input) {
    try {
        //init
        let lcdscreen = new LCD(3,3)
        
        // Check params
        
        //Show
        if (lcdscreen.canShow(input)) {
            //split input into an array
            let digits = (""+input).split("");;
            lcdscreen.show(digits);
            process.exit(0);
        } else {
            console.log("input provided is not adapted for the screen, please use a number between 0 and 999")
            process.exit(10);
        }
        
    }
    catch (err) {
        console.error(err.message);
        process.exit(20);
    }
}

main(program.show); 