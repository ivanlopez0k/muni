const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');
const validateToken = require('../middleware/validateToken');

router.post('/create', surveyController.createSurvey);
router.get('/getall', validateToken, surveyController.getAllSurvey);


module.exports = router;