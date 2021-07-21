'use strict';

module.exports = (regNumbers) => {
    if (regNumbers.length == 0) {
		return 0;
	} else if (regNumbers == ',') {
		return 0
	} else {
		return regNumbers.split(",").length;
	}
}