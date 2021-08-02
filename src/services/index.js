import axios from 'axios';

const baseURl = 'http://localhost:3001/';

const getAllZodic =()=>{
   return axios.get(`${baseURl}db/zodiac_signs`).then((response) =>{
    console.log('respondi');       
    console.log(response.data);       
});
}

export default getAllZodic;