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
     *  @param {*} input 
     */
    show(input){
        console.log("show number");
    }
}

module.exports = Lcd;