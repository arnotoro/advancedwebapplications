var express = require('express');
var router = express.Router();

/* GET recipe */
router.get('/:food', function(req, res, next) {
  res.json({
    name: req.params.food,
    instructions: ['1. Boil water', '2. Add flour'],
    ingredients: ['water', 'flour']
  })
});

module.exports = router;
