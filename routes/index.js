const express = require('express');
const committeeInfo = require('../data/soc.json');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'IT Soc',
    layout: 'bignav'
  });
});

router.get('/two', (req, res) => {
  res.render('index-2', {
    title: 'IT Soc',
    layout: 'bignav'
  })
})

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    about: 'class=\'hidden\'',
    members: committeeInfo
  })
})


module.exports = router;