'use strict';

module.exports = (itemList) => {
    let resultsList = [];

    for (let item of itemList) {
        let amount = item.qty;
        if (amount > 20) {
             resultsList.push(item);
        }
    }
    return resultsList;
    
}