const express = require('express');
const {pingController}=require('../../controllers/pingcontroller');
const router = express.Router();

router.get('/',pingController);


router.get('/account',pingController);



module.exports = router;