const { Router } = require('express');
const router = Router();
const widgetController = require('../controllers/widgetController');


router.post('/addwidget', widgetController.add_widget);
router.post('/widgets', widgetController.widgets);
router.post('/deleteWidget', widgetController.delete_widget);


module.exports = router;
