const typeFindZodicList = 'findZodicList';
const typeSelectTypeDisplay = 'selectTypeDisplay';
const typeFilterZodicList = 'filterZodicList';


const findZodicList = (zodicList)=> {
    return{
        type: typeFindZodicList,
        payload: zodicList,
    };
};

const filterZodicList = (zodicListFiltered)=> {
    return{
        type: typeFilterZodicList,
        payload: zodicListFiltered,
    };
};

const selectTypeDisplay = (codDisplay) =>{
    return {
        type: typeSelectTypeDisplay,
        payload: codDisplay
    }
}


export {typeFindZodicList, findZodicList,
    typeSelectTypeDisplay, selectTypeDisplay,
    typeFilterZodicList, filterZodicList }