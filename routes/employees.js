var express = require('express');
var router = express.Router();
var api_functions = require('../public/js/api_functions');

router.get('/listall2', function (req, res, next) {
  res.render('test', { title: 'Test' });
});

router.get('/listall', async (req, res, next) => {
  const dburl = 'http://' + global.db_token_ip + '/api/v3/employees/';
  const dbstring = '';
  const dbmethod = 'get';
  const dbbody = '';
  const rtnejs = '';
  //***************************************************  
  // Call the get function to quuery the DB, set a two second wait to give the function time to return data
  console.log('dburl before call  is ', dburl);
  api_functions.data.dbCallsGet(dburl, dbstring, dbmethod, dbbody, rtnejs)
    .then((data) => {
      statusmesg = "Total Record Count: " + rtnResults.totalCount
      rtnres = res.render('emplistall', { title: 'Employees', resultdata: rtnResults, resultstatus: statusmesg });
    })
})

module.exports = router