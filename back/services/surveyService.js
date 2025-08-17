const {DataTypes} = require('sequelize');
const {sequelize} = require('../models');

const Surver = require('../models/surver')(sequelize, DataTypes);

async function createSurvey(d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16) {
    const survey = new Surver()

    survey.turista = d1;
    survey.difusion = d2;
    survey.motivo = d3;
    survey.reserva = d4;
    survey.tipo_hospedaje = d5;
    survey.cali_hospedaje = d6;
    survey.mat_informativo = d7;
    survey.oficina = d8;
    survey.tipo_informacion = d9;
    survey.medio_informacion = d10;
    survey.tipo_material = d11;
    survey.cali_informacion = d12;
    survey.otra_info = d13;
    survey.que_info = d14;
    survey.cali_mc = d15;
    survey.recom = d16;

    const surveyCreado = await survey.save();
    console.log(surveyCreado);
    return surveyCreado;
    
}

async function allSurveys(){
    const surveys = await Surver.findAll({include:[{all:true}]});

    return surveys;
}

module.exports = { createSurvey, allSurveys }