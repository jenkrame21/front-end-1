import axios from 'axios';

const axiosWithAuth = () => {
  // Grabbing token from broswer
  const token = window.localStorage.getItem('token');
  //
  return axios.create({
    baseURL: 'https://anywhere-fitness-tt42.herokuapp.com/api',
    headers: {
      authorization: token
    }
  });
}

export default axiosWithAuth;
