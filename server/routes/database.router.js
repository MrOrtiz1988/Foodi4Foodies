const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/getId', (req, res) => {
  // GET route code here
});


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
   res.sendStatus(201)
 })
 .catch((dbErr) => {
   console.log('POST /database fail:', dbErr)
   res.sendStatus(500)
 })

});

module.exports = router;
