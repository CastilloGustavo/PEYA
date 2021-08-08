/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import logoVirgo from './virgo.jpg'
import logoTauro from './tauro.jpg'
import logoSagitario from './sagitario.jpg'
import logoPiscis from './piscis.jpg'
import logoLibra from './libra.jpg'
import logoLeo from './leo.jpg'
import logoGeminis from './geminis.jpg'
import logoEscorpion from './escorpio.jpg'
import logoCapricornio from './capricornio.jpg'
import logoCancer from './cancer.jpg'
import logoAries from './aries.jpg'
import logoAcuario from './acuario.jpg'

const mapIdKeyToImag = {
    tauro: <img src={logoTauro}></img>,
    aries: <img src={logoAries}></img>,
    acuario: <img src={logoAcuario}></img>,
    libra: <img src={logoLibra}></img>,
    piscis: <img src={logoPiscis}></img>,
    geminis: <img src={logoGeminis}></img>,
    cancer: <img src={logoCancer}></img>,
    leo: <img src={logoLeo}></img>,
    virgo: <img src={logoVirgo}></img>,
    escorpio: <img src={logoEscorpion}></img>,
    sagitario: <img src={logoSagitario}></img>,
    capricornio: <img src={logoCapricornio}></img>,
}

const WrapperImg = (props) =>{
    console.log('Aca');
    console.log(props);
    console.log(props.keyImg);
    return(mapIdKeyToImag[props.keyImg] ? mapIdKeyToImag[props.keyImg]: null )
}

export default WrapperImg;