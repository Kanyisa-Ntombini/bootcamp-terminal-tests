'use strict';

module.exports = (regNumberString) => {
    if (isNaN(regNumberString) && regNumberString.length > 0) {
        let regNumberList = regNumberString.split(',');
        let count = 0;
        
        for (let number of regNumberList) {
            let trimmedNumber = number.trim();
            if (trimmedNumber.startsWith('CJ')) {
                count ++;
            }
        }
        return count;
    } else {
        if (typeof regNumberString == "number") {
            return 'Please do not enter a number';
        } else {
            return 0;
        }
    }
}