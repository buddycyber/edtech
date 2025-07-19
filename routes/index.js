var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/careers', function(req, res, next) {
  res.render('careers');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/courses', function(req, res, next) {
  res.render('courses');
});

router.get('/projects', function(req, res, next) {
  res.render('projects');
});

router.get('/verify', function(req, res, next) {
  res.render('verify');
});

router.get('/webinars', function(req, res, next) {
  res.render('webinars');
});

router.get('/workshops', function(req, res, next) {
  res.render('workshops');
});

module.exports = router;
