const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/user-list', async function(req, res, next) {
    try {
      res.json(await programmingLanguages.getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

module.exports = router;
