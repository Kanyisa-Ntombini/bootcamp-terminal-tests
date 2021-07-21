'use strict';

module.exports = (itemList, threshold) => {
    let resultsList = [];

    for (let item of itemList) {
        let amount = item.qty;
        if (amount > threshold) {
             resultsList.push(item);
        }
    }
    return resultsList;
    
}