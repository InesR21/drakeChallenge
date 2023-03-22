import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ProductItem from './ProductItem';
import {Product} from '../types';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({products}: ProductListProps) => {
  if (!products.length) {
    return (
      <View>
        <Text>No hay productos</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={products}
        initialNumToRender={6}
        renderItem={({item}) => <ProductItem product={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default ProductList;
