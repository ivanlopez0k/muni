const userService = require('../services/userService');

async function login(req, res){
    const { username, password } = req.body;

    try{
        const login = await userService.login(username, password)
        res.status(200).json(login)
    }catch(err){
        res.status(400).json("Datos incorrectos!")
    }
}


module.exports = { login };