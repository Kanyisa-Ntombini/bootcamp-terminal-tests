'use strict';

module.exports = (regNumberString) => {
    let regNumberList = regNumberString.split(',');
    let count = 0;
	 
	 for (let number of regNumberList) {
	 	let trimmedNumber = number.trim();
		if (trimmedNumber.startsWith('CJ')) {
        count ++;
      }
	 }
    return count;
}