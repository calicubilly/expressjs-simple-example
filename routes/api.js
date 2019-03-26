const express = require('express');
const router = express.Router();
const request = require('request');

// consuming rest api sample
// GET http://localhost:3000/api/countries
router.get('/countries', (req, res) => {
    // https://github.com/request/request
    let options = {
        url: 'https://restcountries.eu/rest/v2/all',
        json: true
    }
    request(options, function (error, response, body) {
        res.json(response);
    });
});

// with body sample
// POST http://localhost:3000/api/login
// body (raw) {"username": "fsdf", "password": "fsdfsdfsdf"}
router.post('/login', (req, res) => {
  const {username, password} = req.body;

  res.json({username, password});
});

// with param sample
// GET http://localhost:3000/api/test/today
router.get('/test/:type', (req, res) => {
    res.json({params: req.params.type});
});

// with query sample
// GET http://localhost:3000/api/test?test=hello
router.get('/test', (req, res) => {
    res.json({queries: req.query});
});

// with status error sample
// GET http://localhost:3000/api/error 
router.get('/error', (req, res) => {
    res.status(404).json({msg: "Not found!"});
});

module.exports = router;