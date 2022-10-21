/* 
file: models/contacts.js
author: Akshar Patel (301209904)
date: OCT 15, 2022
*/
let mongoose = require("mongoose");

let contactModel = mongoose.Schema(
  {
    name: String,
    number: String,
    email: String,
  },
  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("contacts", contactModel);
