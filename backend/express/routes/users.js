var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', (req, res, next) => {
  // res.render("")
  res.send(`recieve user id: ${res.req.params.id}`);
});

module.exports = router;
