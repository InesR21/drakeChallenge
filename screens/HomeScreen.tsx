import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {useProducts} from '../hooks/useProducts';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import BasketIcon from '../components/BasketIcon';
import Loading from '../components/Loading';

const HomeScreen = () => {
  const {products, loading} = useProducts();

  if (loading) {
    return (
      <>
        <StatusBar hidden />
        <View className="flex-1 items-center justify-center bg-[#2d3748]">
          <Loading size={100} />
        </View>
      </>
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
