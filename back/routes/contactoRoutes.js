const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController');
const validateToken = require('../middleware/validateToken');

router.post('/contacto', contactoController.createContacto);
router.get('/getall',validateToken, contactoController.getContacts);

module.exports = router;