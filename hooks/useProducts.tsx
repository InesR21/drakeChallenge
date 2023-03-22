import {useState, useEffect} from 'react';
import {getProducts} from '../api/product-service';
import {Product} from '../types';

export const useProducts = () => {
  const product: Product[] = [];
  const [products, setProducts] = useState(product);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const respode = await getProducts();
    if (respode) {
      setProducts(respode);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {products, loading, setProducts};
};
