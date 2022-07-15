const express = require('express');
const data = [];
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(
    `<form  action="/" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')"method="POST">
    <input id="username" type="text" ><input id="message" name= "message"type="text" ><button type="submit">add</button></form>`
  );
});

router.post('/', (req, res, next) => {
  data.push(`{${req.body.username}:${req.body.message}}`);
  console.log(data);
  console.log(`${req.body.username}:${req.body.message}`);
  res.redirect('/');
});

module.exports = router;
