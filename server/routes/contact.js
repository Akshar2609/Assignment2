/* 
file: routes/contact.js
author: Akshar Patel (301209904)
date: OCT 15, 2022
*/
let express = require("express");
let router = express.Router();

let contactController = require("../controllers/contactList");

function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("../../users/login");
  }
  next();
}

//GET : Endpoint to display contact list
router.get("/", contactController.displayContactList);

//GET : endpoint for retriving particular contact info
router.get("/edit/:id", requireAuth, contactController.displayEditPage);
//router.get("/edit/:id", requireAuth, contactController.displayEditPage);

//POST : endpoint to update particular contact info
router.post("/edit/:id", requireAuth, contactController.processEditPage);

//GET : endpoint to delete particular contact info
router.get("/delete/:id", requireAuth, contactController.deleteContact);

module.exports = router;
