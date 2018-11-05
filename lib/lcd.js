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
     * show  LCD  
     *  @param {*} input 
     */
    show(input){
        console.log("show number");
    }
}

module.exports = Lcd;