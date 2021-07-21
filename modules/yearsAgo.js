'use strict';

module.exports = (suppliedYear) => {
    if (isNaN(suppliedYear)) {
        return "Please enter a number only";
    } else {
        return 2021 - suppliedYear;
    }
} 