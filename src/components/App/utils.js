const zodicMonthMap = {
    '1': { limitDay: 20, moreLimit: 'acuario', lessLimit: 'capricornio'},
    '2': { limitDay: 19, moreLimit: 'picis', lessLimit: 'acuario' },
    '3': { limitDay: 21, moreLimit: 'aries', lessLimit: 'picis' },
    '4': { limitDay: 20, moreLimit: 'tauro', lessLimit: 'aries' },
    '5': { limitDay: 21, moreLimit: 'geminis', lessLimit: 'tauro' },
    '6': { limitDay: 21, moreLimit: 'cancer', lessLimit: 'geminis' },
    '7': { limitDay: 23, moreLimit: 'leo', lessLimit: 'cancer' },
    '8': { limitDay: 23, moreLimit: 'virgo', lessLimit: 'leo' },
    '9': { limitDay: 23, moreLimit: 'libra', lessLimit: 'virgo' },
    '10': { limitDay: 23, moreLimit: 'escorpio', lessLimit: 'libra' },
    '11': { limitDay: 22, moreLimit: 'sagitario', lessLimit: 'escorpio' },
    '12': { limitDay: 22, moreLimit: 'capricornio', lessLimit: 'sagitario' },
  }


const getMainZodicMonth = (date)=>{
    const periodZodic = zodicMonthMap[parseInt(`${date.getMonth() + 1}`)]
    return date.getDate() < periodZodic.limitDay ? periodZodic.lessLimit : periodZodic.moreLimit;
}

export default getMainZodicMonth;