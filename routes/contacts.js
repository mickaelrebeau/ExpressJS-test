const express = require('express')
const path = require('path')
const { getContacts, getContact, createContact, updateContact, deleteContact } = require("../controllers/contactController")

const router = express.Router()

// Chemin d'accès aux utilisateurs existant et de création d'un utilisateur
router.route('/').get(getContacts).post(createContact)

// Chemin d'accès à un utilisateur, à la modification et à la suppression d'un utilisateur
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)


module.exports = router