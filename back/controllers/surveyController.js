const surveyService = require('../services/surveyService');

async function createSurvey(req, res) {
    
    const { turista, difusion, motivo, reserva, tipo_hospedaje, cali_hospedaje, mat_informativo, oficina, tipo_informacion, medio_informacion, tipo_material, cali_informacion, otra_info, que_info, cali_mc, recom } = req.body
    try {
        const survey = await surveyService.createSurvey(turista, difusion, motivo, reserva, tipo_hospedaje, cali_hospedaje, mat_informativo, oficina, tipo_informacion, medio_informacion, tipo_material, cali_informacion, otra_info, que_info, cali_mc, recom)
        console.log(survey)
        res.status(201).send(survey)
        }
    catch (error) {
        res.status(400).json('Hubo un error: ', error)
    }
};

async function getAllSurvey(req,res) {
    try{
        const surveys = await surveyService.allSurveys()
        res.status(200).send(surveys)
    }catch(err){
        res.status(400).json('Error')
        console.log(err)
    }
    
}

module.exports = { createSurvey, getAllSurvey }