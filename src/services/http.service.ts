import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { toast } from 'react-toastify';

/**
 * httpRequest function.
 *
 * @author Oleksii Medvediev
 * @param {AxiosRequestConfig} options
 * @returns {AxiosResponse['data']} axios response data
 */
const httpRequest: (options?: AxiosRequestConfig) => AxiosResponse['data'] = async (
  options
) => {
  try {
    const { data } = await axios({
      baseURL: 'https://api.github.com/users',
      method: 'get',
      ...options,
    });
    if (data) {
      return data;
    } else {
      toast("Your request wasn't successful...");
    }
  } catch (error) {
    toast.error('Something went wrong with your request...');
    console.info(error);
  }
};

export { httpRequest };
