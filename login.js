const express = require('express');
const data=[];
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(
    `<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/product" method="POST">

    <input id="username" type="text" name"title">
  
    <button type="submit">add</button>
  
    </form>`
  );
});

router.post('/', (req, res, next) => {
  data.push(`{${req.body.username}:${req.body.message}}`);
  console.log(data);
  console.log(`${req.body.username}:${req.body.message}`);
  res.redirect('/');
});

module.exports = router;