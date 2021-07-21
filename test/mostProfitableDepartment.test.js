'use strict';

let assert = require('assert');
let mostProfitableDepartment = require('../modules/mostProfitableDepartment');

describe('The mostProfitableDepartment function' , function(){
    /* === TEST 1 === */
    it('should show which is the most profitable department' , function(){
        var salesData = [
            {department: 'hardware', sales: 4500, day: 'Monday'},
            {department: 'outdoor', sales: 1500, day: 'Monday'},
            {department: 'carpentry', sales: 5500, day: 'Monday'},
            {department: 'hardware', sales: 7500, day: 'Tuesday'},
            {department: 'outdoor', sales: 2505, day: 'Tuesday'},
            {department: 'carpentry', sales: 1540, day: 'Tuesday'},
            {department: 'hardware', sales: 1500, day: 'Wednesday'},
            {department: 'outdoor', sales: 8507, day: 'Wednesday'},
            {department: 'carpentry', sales: 8009, day: 'Wednesday'},
            {department: 'hardware', sales: 12000, day: 'Thursday'},
            {department: 'outdoor', sales: 18007, day: 'Thursday'},
            {department: 'carpentry', sales: 6109, day: 'Thursday'},
            {department: 'hardware', sales: 7005, day: 'Friday'},
            {department: 'outdoor', sales: 12006, day: 'Friday'},
            {department: 'carpentry', sales: 16109, day: 'Friday'}
        ];    
        assert.deepEqual("outdoor", mostProfitableDepartment(salesData));
    });

    /* === TEST 2 === */
    it('should show which is the most profitable department' , function(){
        var salesData = [
            {department: 'hardware', sales: 4500, day: 'Monday'},
            {department: 'outdoor', sales: 1500, day: 'Monday'},
            {department: 'carpentry', sales: 5500, day: 'Monday'},
            {department: 'hardware', sales: 7500, day: 'Tuesday'},
            {department: 'outdoor', sales: 2505, day: 'Tuesday'},
            {department: 'carpentry', sales: 1540, day: 'Tuesday'},
            {department: 'hardware', sales: 1500, day: 'Wednesday'},
            {department: 'outdoor', sales: 8507, day: 'Wednesday'},
            {department: 'carpentry', sales: 80009, day: 'Wednesday'},
            {department: 'hardware', sales: 12000, day: 'Thursday'},
            {department: 'outdoor', sales: 18007, day: 'Thursday'},
            {department: 'carpentry', sales: 6109, day: 'Thursday'},
            {department: 'hardware', sales: 7005, day: 'Friday'},
            {department: 'outdoor', sales: 12006, day: 'Friday'},
            {department: 'carpentry', sales: 16109, day: 'Friday'}
        ];    
        assert.deepEqual("carpentry", mostProfitableDepartment(salesData));
    });

    /* === TEST 3 === */
    it('should show which is the most profitable department' , function(){
        var salesData = [
            {department: 'hardware', sales: 4500, day: 'Monday'},
            {department: 'outdoor', sales: 1500, day: 'Monday'},
            {department: 'carpentry', sales: 5500, day: 'Monday'},
            {department: 'hardware', sales: 7500, day: 'Tuesday'},
            {department: 'outdoor', sales: 2505, day: 'Tuesday'},
            {department: 'carpentry', sales: 1540, day: 'Tuesday'},
            {department: 'hardware', sales: 1500, day: 'Wednesday'},
            {department: 'outdoor', sales: 8507, day: 'Wednesday'},
            {department: 'carpentry', sales: 80009, day: 'Wednesday'},
            {department: 'hardware', sales: 12000, day: 'Thursday'},
            {department: 'outdoor', sales: 18007, day: 'Thursday'},
            {department: 'carpentry', sales: 6109, day: 'Thursday'},
            {department: 'hardware', sales: 700500, day: 'Friday'},
            {department: 'outdoor', sales: 12006, day: 'Friday'},
            {department: 'carpentry', sales: 16109, day: 'Friday'}
        ];    
        assert.deepEqual("hardware", mostProfitableDepartment(salesData));
    });
});