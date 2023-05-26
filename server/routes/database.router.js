const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `select * from places WHERE user_id = $1;`;
  pool.query(sqlQuery, [req.user.id])
 .then((dbRes) => {
  res.send(dbRes.rows);
 })
 .catch((dbErr) => {
   console.log('GET /database/ fail:', dbErr);
   res.sendStatus(500);
 })
});

// This GET for retrieving list of id's of saved places
router.get('/getId', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `select place_id from places WHERE user_id = $1;`;
  pool.query(sqlQuery, [req.user.id])
 .then((dbRes) => {
  res.send(dbRes.rows);
 })
 .catch((dbErr) => {
   console.log('GET /database/getId fail:', dbErr);
   res.sendStatus(500);
 })
});

// This POST stores that data that user wishes to be saves to the database 
router.post('/', rejectUnauthenticated, (req, res) => {
  const placeId = req.body.placeId
  const name = req.body.name;
  const image = req.body.image;
  const address = req.body.address;
  const rating = req.body.rating;
  const phone = req.body.phone;
  const url = req.body.url;
  const userId = req.user.id;

  const sqlQuery = `
  INSERT INTO "places" 
  ("place_id", "name", "image", "address", "rating", "phone", "url", "user_id")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
  `;
 const sqlValues = [placeId, name, image, address, rating, phone, url, userId];

 pool.query(sqlQuery, sqlValues)
 .then((dbRes) => {
   res.sendStatus(201);
 })
 .catch((dbErr) => {
   console.log('POST /database fail:', dbErr);
   res.sendStatus(500);
 })

});

module.exports = router;
