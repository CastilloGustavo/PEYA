const typeFindZodicList = 'findZodicList';
const typeSelectTypeDisplay = 'selectTypeDisplay';

const findZodicList = (zodicList)=> {
    return{
        type: typeFindZodicList,
        payload: zodicList,
    };
};

const selectTypeDisplay = (codDisplay) =>{
    return {
        type: typeSelectTypeDisplay,
        payload: codDisplay
    }
}


export {typeFindZodicList, findZodicList,
    typeSelectTypeDisplay, selectTypeDisplay }