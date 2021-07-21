'use strict';

module.exports = (shiftName) => {
    if (isNaN(shiftName) || shiftName.length >= 0) {
        let shiftLowerCase = shiftName.toLowerCase();

        switch (shiftLowerCase) {
            case 'morning':
                return 'R' + 20;
                break;
            case 'afternoon':
                return 'R' + 10;
                break;
            case 'nightshift':
                return 'free';
            default: 
                return 'Please enter morning, afternoon or nightshift';
        }

    } else {
        return 'Please do not enter a number';
    }
}