/**
 * Class that handles LCD 
 */
var fonts = require("./ascii-art-numbers");

class Lcd {
    /**
     * 
     * @param {*} width 
     * @param {*} height 
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    /**
     * test if the number asked can be shown to the screen
     * @returns true if number between 0 and 999 otherwise false
     */
    canShow(numbers) {
        if (numbers >=0 && numbers <= 999) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * show  LCD  screen 
     *  @param {Array} input 
     */
    show(input){
        
        if (input === null) {
            throw new Error("null input provided");
        }
        
        if (input.length <= 0) {
            throw new Error("input lenght should be greater than zero");
        }
            
        for (let index = 0; index < this.height; index++) {
            input.forEach(element => {
                process.stdout.write(fonts[element][index]);
            });
            process.stdout.write("\n");
        }
    }
}

module.exports = Lcd;