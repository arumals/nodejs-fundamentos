var moment = require('moment');
moment.locale('es');
moment.weekdays(true).forEach(function(dia){
	console.log(dia);
});