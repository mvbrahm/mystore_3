var express = require('express');
// var emp = require('request');
// var router = express.Router();
const fetch = require('node-fetch');
var cred = {
    "username": "bdpamked",
    "password": "U;qibKs[2KC607"
};

console.log("RESTAPI IP being used ", process.env.restapi);
// global.db_token_ip = process.env.restapi.trim();

var methods = {
    db_sign_in: function () {
        var dbtoken = 'http://' + global.db_token_ip + '/api/v3/token';
        const result = fetch(dbtoken, (
            dbtoken, {
                method: 'POST',
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cred)
            }))
            .then((response) => response.json())
            .then((data) => {
                console.log('Success retrieved token:', data);
                global.DB_token = data.access_token;
                console.log('global:', global.DB_token);
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    },
    dbCallsGet: async function (dburl, dbstring, dbmethod, dbbody, rtnejs) {
        console.log('dburl is ', dburl);
        console.log('function get dbcall', dburl, dbstring, dbmethod, dbbody, rtnejs);
        var empurl = dburl + dbstring;
        var bearer = 'Bearer ' + global.DB_token;
        const result = await fetch(empurl, (
            empurl, {
                method: dbmethod,
                withCredentials: true,
                credentials: 'include',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                }
            }))
            .then((response) => response.json())
            .then((data) => {

                global.DB_data = data;


                global.DB_data = data;
                rtnResults = data;
                return rtnResults;
            })
            .catch((error) => {
                console.error('Error:', error);
                rtnResults = error
                return rtnResults
            });
    },
    dbCallspost: async function (dburl, dbstring, dbmethod, dbbody) {

        console.log('dbCallspost before dbcall ', dburl, dbstring, dbmethod, dbbody);
        var empurl = dburl + dbstring;
        var bearer = 'Bearer ' + global.DB_token;
        const result = await fetch(empurl, (
            empurl, {
                method: dbmethod,
                withCredentials: true,
                credentials: 'include',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                },
                body: dbbody
            }))
            .then((response) => response.json())
            .then((data) => {
                global.DB_data = data;
                let DataToReturn = data;
                console.log('Success 41:', data);
                //console.log('Success 41a:',DataToReturn);
                global.DB_data = data;
                rtnResults = data;
                //console.log('golbal:' , global.DB_data);
                //var resultstatus = response.message
                //rtnres= res.render('empdel', { resultdata:  data, resultstatus: data.totalCount} )

                //console.log('aft dbcall before exit');
                var sqlServerObj = {
                    resultx: data,
                };
                return rtnResults;
            })
        console.log("here here")
    }
};

exports.data = methods;