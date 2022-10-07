/* 
file: routes/index.js
author: Akshar Patel (301209904)
date: OCT 3, 2022
   */
var express = require("express");
var router = express.Router();

let indexRouteController = require("../controllers/index");
/* GET home page. */
router.get("/", indexRouteController.routeToHomePage);
/* GET home page. */
router.get("/home", indexRouteController.routeToHomePage);
/* GET aboutme page. */
router.get("/aboutme", indexRouteController.routeToAboutMe);
/* GET projects page. */
router.get("/projects", indexRouteController.routeToProjects);
/* GET services page. */
router.get("/services", indexRouteController.routeToServices);
/* GET contact page. */
router.get("/contactme", indexRouteController.routeToContactMe);

module.exports = router;