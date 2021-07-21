'use strict';

module.exports = (regNumber) => {
    if ((typeof regNumber) == 'string') {
        let startLetters = regNumber.substr(0, 2);
      
        switch (startLetters) {
            case 'CY':
                return 'Bellville';
                break;
            case 'CJ':
                return 'Paarl';
                break;
            case 'CA':
                return 'Cape Town';
                break;
            default:
                return 'Some other place!';
        }
    }
    else {
        return "Please enter a string";
    }  
}