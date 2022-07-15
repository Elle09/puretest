const path = require('path');

const express = require('express');
const rootdir = require('../util/path');
const router = express.Router();

// /admin/add-product => GET
router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootdir, 'views', 'contactus.html'));
});

// /admin/add-product => POST
router.post('/contactus', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
