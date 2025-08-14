export interface EncuestaUsuario {
    id: Number,

    Turista: {
        edad: string, sexo: string, procedencia: string, acompaniantes: string, ingreso: Date, salida: Date
    },
    Difusion: {
        television: boolean,
        pagina: boolean,
        radio: boolean,
        graficos: boolean,
        facebook: boolean,
        recomendacion: boolean,
        otros: string},
    Motivo: {
        conocia: boolean,
        recomendacion: boolean,
        promocion: boolean,
        tranquilidad: boolean,
        paisajes: boolean,
        eventos: boolean,
        amabilidad: boolean,
        otros:string},
    Reserva: {
        reserva: string,
        medioReserva: string
    },
    Tipo_Hospedaje: {
        tipo_hospedaje: string
    },
    Calificacion_Hospedaje: {
        calificacion_hospedaje: string
    },
    Material_Informativo: {
        recibioMaterial: string
    },
    Oficina: {
        oficinaOption: string
    },
    Tipo_Informacion: {
        hospedaje: boolean,
        paseos: boolean,
        eventos: boolean,
        gastronomia: boolean,
        turismo_aventura: boolean,
        servicios: boolean,
        rutas: boolean,
        otros: string
    },
    Medio_Informacion: {
        personalmente: string,
        email: string,
        facebook: string,
        telefonica: string,
        otros: string
    },
    Tipo_Material: {
        folletos: string,
        revistas: string,
        planos: string,
        calcomanias: string,
        guias: string
    },
    Calificacion_Informacion: {
        calificacion:string
    },
    Otra_Informacion: {
        informacion: string
    },
    Que_Informacion: {
        espectaculos_MC: boolean,
        espectaculos_cercanos: boolean,
        recreacion: boolean,
        deportivas: boolean,
        aventuras: boolean,
        paseos: boolean,
        otros: string
    },
    Calificacion_MC: {
        calificacion_MC: string,
        porque: string
    },
    Recomendaria: {
        recomendaria: string,
        porque: string
    },
    createdAt: Date;

}
