var express = require('express');
var app = express();
app.listen(8001);
//app.use(express.static('.',{index: 'appView.html'}));
app.use(express.static('.'))


