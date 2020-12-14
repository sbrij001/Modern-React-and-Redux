import axios from 'axios';

// will put together code related to the configuration of axios.
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID tY907IzLfg7VebQwLlZoMAmVcByUFNwMwCtpNG3bm2w'
  }
});