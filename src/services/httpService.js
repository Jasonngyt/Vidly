import axios from 'axios';
import logger from './logService';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.reponse && error.response.status >= 400 && error.reponse.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error('An unexpected error occured.');
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
