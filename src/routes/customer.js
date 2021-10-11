const express = require('express');
const { list } = require('../controllers/custmerController');
const { listm } = require('../controllers/custmerController');
const router = express.Router();
const custmerController=  require('../controllers/custmerController');

//router.get('/',custmerController.listm);
router.get('/',custmerController.list);
router.post('/add',custmerController.save);
router.get('/delete/:id',custmerController.delete);
router.get('/update/:id', custmerController.edit);
router.post('/update/:id',custmerController.update);

router.post('/addmusic',custmerController.savem);
router.get('/deletemusic/:id',custmerController.deletem);
router.get('/updatemusic/:id', custmerController.editm);
router.post('/updatemusic/:id',custmerController.updatem);

module.exports = router;