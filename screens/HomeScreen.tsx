import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useProducts} from '../hooks/useProducts';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import BasketIcon from '../components/BasketIcon';

const HomeScreen = () => {
  const {products, loading} = useProducts();

  if (loading) {
    return (
      <SafeAreaView className="mx-4 mt-6">
        <View>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className="px-4 pt-6 bg-white">
      <BasketIcon />
      <View className="px-4 pt-2">
        <Header />
      </View>

      <View className="pt-5 pb-10">
        <ProductList products={products} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
