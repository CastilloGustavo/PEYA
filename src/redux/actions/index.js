const typeFindZodicList = 'findZodicList';
const typeSelectTypeDisplay = 'selectTypeDisplay';
const typeFilterZodicList = 'filterZodicList';
const typeSetZodicMount = 'setZodicMount';


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

const setZodicMount = (codDisplay) =>{
    return {
        type: typeSetZodicMount,
        payload: codDisplay
    }
}


export {typeFindZodicList, findZodicList,
    typeSelectTypeDisplay, selectTypeDisplay,
    typeFilterZodicList, filterZodicList,
    typeSetZodicMount, setZodicMount }