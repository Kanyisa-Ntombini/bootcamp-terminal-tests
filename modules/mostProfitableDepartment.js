'use strict';

module.exports = (salesData) => {
    let newSalesData = {};

    for (let data of salesData) {
        let dept = data.department;
        let sales = data.sales;
        
        if (newSalesData[dept] === undefined) {
            newSalesData[dept] = sales;
        }
        else {
            newSalesData[dept] += sales;
        }
    }
  
    let compare = 0;
    let profitableDept = '';
  
    for (let item in newSalesData) {
        let sales = newSalesData[item];
        if (sales > compare) {
            compare = sales;
            profitableDept = item;
        }
    }

    return profitableDept;
}