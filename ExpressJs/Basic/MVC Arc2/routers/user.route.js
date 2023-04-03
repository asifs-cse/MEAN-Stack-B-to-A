const express = require('express');
const { getAbout, getSkill, getContact } = require('../controllers/users.controller');
const routes = express.Router();


routes.get('/about', getAbout);

routes.get('/skill', getSkill);

routes.get('/contact', getContact);

module.exports= routes;