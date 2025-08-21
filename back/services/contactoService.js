const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');

const Contact  = require('../models/contact')(sequelize, DataTypes);

async function createContacto(Name, email, message){
    const contacto = new Contact()

    contacto.name = Name;
    contacto.email = email;
    contacto.message = message;

    const contactoCreado = await contacto.save()

    return contactoCreado;
}

async function getContacto(){
    const contactos = await Contact.findAll({ínclude:[{all: true}]})

    return contactos
}

module.exports = { createContacto, getContacto }