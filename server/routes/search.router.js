const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
//rejectUnauthenticated is middleware that ensure that in order to make the call,
//user must not be undefined
const { rejectUnauthenticated } = require('../modules/authentication-middleware');



let clientInfo; //hold location coords and term user in search field
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body);
  clientInfo = req.body;
  res.sendStatus(200);
});

router.get('/', rejectUnauthenticated, (req, res) => {

  //Here i used a yelp API to get business data based on the term and location
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
