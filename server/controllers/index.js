/*
file: controllers/index.js
author: Akshar Patel (301209904)
date: OCT 15, 2022
*/

//Route To home
module.exports.routeToHomePage = (req, res, next) => {
  res.render("index", {
    title: "Home",
    displayName: req.user ? req.user.displayName : "",
  });
};

//Route To about me
module.exports.routeToAboutMe = (req, res, next) => {
  res.render("index", {
    title: "About Me",
    displayName: req.user ? req.user.displayName : "",
  });
};

//Route To projects
module.exports.routeToProjects = (req, res, next) => {
  res.render("index", {
    title: "Projects",
    displayName: req.user ? req.user.displayName : "",
  });
};

//Route To services
module.exports.routeToServices = (req, res, next) => {
  res.render("index", {
    title: "My Services",
    displayName: req.user ? req.user.displayName : "",
  });
};

//Route To contact me
module.exports.routeToContactMe = (req, res, next) => {
  res.render("index", {
    title: "Contact Me",
    displayName: req.user ? req.user.displayName : "",
  });
};