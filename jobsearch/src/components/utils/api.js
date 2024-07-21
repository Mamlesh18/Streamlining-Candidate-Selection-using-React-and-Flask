import axios from 'axios';

export const getCall = async (url) => {
  url = apiEndpoint + url;
  console.log(url);
  let res = await axios.get(url);
  console.log(res);

  return res;
};

export const postCall = async (url, requestBody) => {
  url = apiEndpoint + url;
  console.log(url, requestBody);
  let res = await axios.post(url, requestBody);
  console.log(res);

  return res;
};

export const apiEndpoint = 'http://127.0.0.1:5000/';
