import axios from 'axios';
import {generateRandomPrice} from '../utils';

const baseUrl = 'https://www.amiiboapi.com/api';
const limit = 3;

const addToProducts = products => {
  return products.map((product, index) => {
    return {...product, id: index + 1, price: generateRandomPrice()};
  });
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/amiibo/?limit=${limit}`);
    const products = addToProducts(response.data.amiibo);
    return products;
  } catch (error) {
    console.log(error);
  }
};
