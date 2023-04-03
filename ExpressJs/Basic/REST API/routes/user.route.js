const express = require('express');
const { getUser, postUser, updatetUser } = require('../controllers/user.controler');
const router = express.Router();

router.get('/user', getUser);
router.post('/user', postUser);
router.put('/:id', updatetUser);

module.exports = router;