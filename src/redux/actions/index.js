const typeFindPlanetsList = 'findPlanetList';

const findPlanetList = (planetList)=> {
    return{
        type: typeFindPlanetsList,
        payload: planetList,
    };
};




export {typeFindPlanetsList, findPlanetList }