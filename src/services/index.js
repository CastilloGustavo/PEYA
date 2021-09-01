import axionWrapper from './axioscustom'

const baseURl = 'http://localhost:3000/';

// Delegar Loggeo a Kibina o Metrica para generar alarma de errores en prod
const errorLog = (error) =>{
    console.log(error);
}

const getAllPlanets =()=>{
    return axionWrapper.get(`${baseURl}api/planets`).then((response) =>{
    return response.data;       
}).catch(e => {
    errorLog(e);
    return [];
});


}

export default getAllPlanets;