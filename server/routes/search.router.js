const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');



let clientInfo;
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body);
  clientInfo = req.body
  res.sendStatus(200)
});




router.get('/', rejectUnauthenticated, (req, res) => {

  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.yelp.com/v3/businesses/search?term=${clientInfo.term}&limit=10&latitude=${clientInfo.latitude}&longitude=${clientInfo.longitude}`,
    headers: { 
      'authorization': process.env.MY_KEY
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(response.data);
    res.send(response.data.businesses);
  })
  .catch((error) => {
    console.log(error);
  });
  
})

module.exports = router;
