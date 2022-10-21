/* 
file: users.js
author: Akshar Patel (301209904)
date: OCT 15, 2022
*/
var express = require("express");
var router = express.Router();
let usersController = require('../controllers/user');

//GET : endpoints to route to Login
router.get("/login", usersController.displayLoginPage);
router.post("/login", usersController.processLoginPage);
//GET : endpoint to route to Logout
router.get("/logout", usersController.processLogout);

module.exports = router;