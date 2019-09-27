const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Subscriber = require('../models/subscriber');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Create subscriber
router.post('/', async (req, res, next) => {
  try{
    const subscriber = new Subscriber({
      _id: new mongoose.Types.ObjectId(),
      email: req.body.email
    });
    await subscriber.save();
    return res.send(subscriber);
  }catch(e){
    return res.status(500).send(e);
  }
});

//Activate subscriber
router.put('/', async (req, res, next) => {
  try{
    const subscriber = await Subscriber.updateOne({email: req.body.email}, {$set: {is_active: true}});
    return res.send(subscriber);
  }catch(e){
    return res.status(500).send(e);
  }
});

//Activate subscriber
router.put('/deactivate', async (req, res, next) => {
  try{
    const subscriber = await Subscriber.updateOne({email: req.body.email}, {$set: {is_active: false}});
    return res.send(subscriber);
  }catch(e){
    return res.status(500).send(e);
  }
});

module.exports = router;
