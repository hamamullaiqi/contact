const express = require("express");
const { getContacts, getContact, addContact, updateContact, deleteContact } = require("../controllers/contact");
const { uploadFile } = require('../middlewares/uploadFile')


const router = express.Router()




//routes

router.get("/contacts", getContacts)
router.get("/contact/:id", getContact)
router.post("/contact", addContact)
router.patch("/contact/:id", updateContact)
router.delete("/contact/:id",  deleteContact)



module.exports = router