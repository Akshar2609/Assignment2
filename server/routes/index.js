/* 
file: routes/index.js
author: Akshar Patel (301209904)
date: OCT 15, 2022
   */
var express = require("express");
var router = express.Router();

let indexRouteController = require("../controllers/index");
//GET : endpoints to route to Home
router.get("/", indexRouteController.routeToHomePage);
router.get("/home", indexRouteController.routeToHomePage);
//GET : endpoint to route to About Me
router.get("/aboutme", indexRouteController.routeToAboutMe);
//GET : endpoint to route to Projects
router.get("/projects", indexRouteController.routeToProjects);
//GET : endpoint to route to Services
router.get("/services", indexRouteController.routeToServices);
//GET : endpoint to route to Contact Me
router.get("/contactme", indexRouteController.routeToContactMe);

module.exports = router;