#!/usr/bin/env node
/**
 *  entry point for the command line program
 * */ 

var program = require('commander');
let LCD = require("../lib/lcd");

program
    .usage("--show input number")
    .option("-s, --show [inputnumber]", "number between 0-999 tp provide")
    .parse(process.argv)

/**
 * program entry point
 */
function main() {
    // Check params are valid

    // Show 
    let lcdscreen = new LCD(3,3)
    lcdscreen.show();
}

main(); 