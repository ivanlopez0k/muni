const contactoService = require('../services/contactoService');

async function createContacto(req, res){
    const { name, email, message } = req.body;
        try{
            const contacto = await contactoService.createContacto(name, email, message)
            res.status(201).send(contacto)
        }     
        catch(error){
           res.status(400).json("Hubo un error en los datos")
       }

}

async function getContacts(req,res) {
    try{
        const contact = await contactoService.getContacto()
        res.status(200).send(contact)
    }catch(err){
        res.status(400).json('Error')
        console.log(err)
    }
    
}

module.exports = { createContacto, getContacts }