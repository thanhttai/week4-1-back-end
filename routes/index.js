const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("index");
});

// const data = {};
const fs = require('fs');
let rawData = fs.readFileSync('db.json');
let jsonData = JSON.parse(rawData);

/* GET students. */
//Get student list
router.get("/students", function (req, res, next) {
  const queries = req.query;
  console.log(queries);
  if (queries.name === undefined && queries.age === undefined) {
    return res.status(200).send(jsonData);
  } else {
  let getData = jsonData.filter(value => {
    return (value.name === queries.name || value.age == queries.age);
  });
  res.status(200).send(getData);
}
});

/* GET students. */
//Get student id
router.get("/students/:id", function (req, res, next) {
  const params = req.params;
  console.log(params);
  let getData = jsonData.filter(value => {
    return value.id === params.id
  })
  res.status(200).send(getData);
});

module.exports = router;
