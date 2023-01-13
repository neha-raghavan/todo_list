const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const programmingLanguages = require('../services/programmingLanguages');
// another routes also appear here
// this script to fetch data from MySQL databse table

/*
router.get('/', async function(req, res, next) {
    try {
      res.json(await programmingLanguages.getMultiple(req.query.page));
      res.render('list', { title: 'User List', userData: result});
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });
*/
router.get('/', async function(req, res, next) {
  try {
    results=await programmingLanguages.getMultiple(req.query.page);
    
    res.render('index', { title: 'User List', userData: results});
  }
catch (err) {
  console.error(`Error while getting programming languages `, err.message);
  next(err);
}
  });
  

module.exports = router;
