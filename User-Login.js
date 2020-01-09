const path = require('path');

const express = require('express');

const userauth = require('../controllers/login');
const router = express.Router();

router.post('/unsuccessfullogin' , userauth.authentication
);

router.get('/login', (req,res)=>{
    res.render("User-Login")
});


module.exports = router;