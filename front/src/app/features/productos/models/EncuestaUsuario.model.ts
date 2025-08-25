export interface EncuestaUsuario {
    id: Number,

    turista: {
        edad: number,
        sexo: string,
        procedencia: string,
        otraProvincia: string,
        otraLocalidad: string,
        otroPais: string,
        acompaniantes: string,
        otrosAcompaniantes:string,
        ingreso: Date,
        salida: Date
    },
    difusion: {
        television: boolean,
        pagina: boolean,
        radio: boolean,
        graficos: boolean,
        facebook: boolean,
        recomendacion: boolean,
        otros: string
      },
    motivo: {
        conocia: boolean,
        recomendacion: boolean,
        promocion: boolean,
        tranquilidad: boolean,
        paisajes: boolean,
        eventos: boolean,
        amabilidad: boolean,
        otros:string
      },
    reserva: {
        reserva: string,
        medioReserva: string
    },
    tipo_hospedaje: {
        tipo_hospedaje: string,
        otro_hospedaje: string
    },
    cali_hospedaje: {
        calificacion_hospedaje: string
    },
    mat_informativo: {
        recibioMaterial: string,
        siRecibio: string
    },
    oficina: {
        oficinaOption: string
    },
    tipo_informacion: {
        hospedaje: boolean,
        paseos: boolean,
        eventos: boolean,
        gastronomia: boolean,
        turismo_aventura: boolean,
        servicios: boolean,
        rutas: boolean,
        otros: string
    },
    medio_informacion: {
        personalmente: string,
        email: string,
        facebook: string,
        telefonica: string,
        otros: string
    },
    tipo_material: {
        folletos: string,
        revistas: string,
        planos: string,
        calcomanias: string,
        guias: string
    },
    cali_informacion: {
        calificacion:string
    },
    otra_info: {
        informacion: string,
        otraInformacion: string
    },
    que_info: {
        espectaculos_MC: boolean,
        espectaculos_cercanos: boolean,
        recreacion: boolean,
        deportivas: boolean,
        aventuras: boolean,
        paseos: boolean,
        otros: string
    },
    cali_mc: {
        calificacion_MC: string,
        porque: string
    },
    recom: {
        recomendaria: string,
        porque: string
    },
    createdAt: Date;
}
