const asynHandler = require("express-async-handler")

const getContacts = asynHandler(async (req, res, _next) => {
    res.status(200).json({ message: "Get All Contacts"})
})

const getContact = asynHandler(async (req, res, _next) => {
    res.status(200).json({ message: `Get Contact for ${req.params.id}`})
})

const createContact = asynHandler(async (req, res, _next) => {
    res.status(200).json({ message: "Create Contact"})
})

const updateContact = asynHandler(async (req, res, _next) => {
    res.status(200).json({ message: `Update Contact for ${req.params.id}`})
})

const deleteContact = asynHandler(async (req, res, _next) => {
    res.status(200).json({ message: `Delete Contact for ${req.params.id}`})
})

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }