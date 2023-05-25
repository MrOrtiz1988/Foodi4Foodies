const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
});


router.post('/', (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const address = req.body.address;
  const rating = req.body.rating;
  const phone = req.body.phone;
  const url = req.body.url;
  const userId = req.user.id;

  const sqlQuery = `
  INSERT INTO "places" 
  ("name", "image", "address", "rating", "phone", "url", "user_id")
  VALUES ($1, $2, $3, $4, $5, $6, $7);
  `;
 const sqlValues = [name, image, address, rating, phone, url, userId];

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
