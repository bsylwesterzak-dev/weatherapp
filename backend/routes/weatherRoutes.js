const { Router } = require('express');
const router = Router();
const weatherController = require('../controllers/weatherController');


router.post('/weather', weatherController.get_Weather);


module.exports = router;