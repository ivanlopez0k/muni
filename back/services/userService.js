const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');
const jwt = require('jsonwebtoken')

const User = require('../models/user')(sequelize, DataTypes);


async function login(username,password){



    const user = await User.findOne({where:{
        name: username,
    }})
    if(!user){
        throw new Error('Usuario no encontrado')
    }
    if (user.password !== password){
        throw new Error ('Contraseña incorrecta')
    }
    
    const token = jwt.sign({
        name: user.name, id: user.id
    },process.env.JWTSECRET)
    console.log(token)
    return token
}


module.exports = {  login };