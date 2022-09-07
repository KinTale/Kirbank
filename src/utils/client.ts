import axios from 'axios';
import storage from './storage'
const host = process.env.REACT_APP_API_URL;

const client = {
    get: (path : string) => {
      const url = `${host}${path}`;
      const headers = {
        Authorization: `Bearer ${storage.loadStorage()}`,
      };
  
      return axios.get(url, { headers });
    },
  
    post: (path : string, data : object) => {
      const url = `${host}${path}`;
      return axios.post(url, data);
    }

}

export default client