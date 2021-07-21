'use strict';

module.exports = (phoneRecord) => {
	if ((typeof phoneRecord) === 'string') {
		let phoneRecordList = phoneRecord.split(',');
		let cost = 0;

		for (let record of phoneRecordList) {
			let trimmedRecord = record.trim();

			if (trimmedRecord === 'call') {
			  cost += 2.75;
			}
			else if (trimmedRecord === 'sms') {
			  cost += 0.65;
			}
		 }
		 return 'R' + cost.toFixed(2);
	} 
	else {
		return "Please enter a string";
	}
}
