import axios from 'axios';

const axionWrapper = axios.create();

axionWrapper.defaults.headers.common['Authorization'] = 'qazwsx';

export default axionWrapper;


