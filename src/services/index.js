import axionWrapper from './axioscustom'

const baseURl = 'http://localhost:3001/';

// Delegar Loggeo a Kibina o Metrica para generar alarma de errores en prod
const errorLog = (error) =>{
    console.log(error);
}

const getAllZodic =()=>{
    return axionWrapper.get(`${baseURl}db/zodiac_signs`).then((response) =>{
    return response.data;       
}).catch(e => {
    errorLog(e);
    return [];
});


}

export default getAllZodic;