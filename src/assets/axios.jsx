import axios from 'axios';
const instance = axios.create({
  baseURL: "https://trackr-backend-lnuq.onrender.com/api/v1",
});

export default instance;