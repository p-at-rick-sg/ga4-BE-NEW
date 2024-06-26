const express = require('express');
const router = express.Router();
const {upload} = require('../middleware/filesMiddleware');

//Add controller imports here
const {uploadAsset, inviteCompanyUser} = require('../controllers/recruiterController');
//Import validators here

//Define endpoints and methods here

//GET

//PUT
router.put('/add-user', inviteCompanyUser);
//POST
router.post('/add-role');

//PATCH

//DELETE

//Export
module.exports = router;
