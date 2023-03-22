import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Product} from '../types';
import Header from '../components/Header';
import ProductType from '../components/ProductType';
import ProductRelease from '../components/ProductRelease';
import BasketIcon from '../components/BasketIcon';
import ProductAddRemove from '../components/ProductAddRemove';

interface ProductDetailScreenParams {
  product: Product;
}
const {height} = Dimensions.get('window');

const ProductDetailScreen = () => {
  const {product} = useRoute().params as ProductDetailScreenParams;

  if (!product) {
    return (
      <SafeAreaView>
        <View>
          <Text>No hay producto</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView className="bg-white">
      <View
        style={{
          height: height,
        }}>
        <View className="px-4 pt-10">
          <View className="pt-6 ">
            <Header />
          </View>
          <Image
            resizeMode="contain"
            source={{uri: product.image}}
            className="w-full h-64 mt-4"
          />
        </View>

        <View className="flex flex-col justify-between p-5">
          <View>
            <View className="flex flex-row align-center">
              <Text
                numberOfLines={2}
                className="text-xl font-bold text-gray-500">
                {product.name} - {product.amiiboSeries}
              </Text>
            </View>

            <View className="mt-2.5 flex-row align-center">
              <Text className="text-base font-bold text-gray-500">
                Character:
              </Text>
              <Text className="ml-2 text-base text-gray-500" numberOfLines={12}>
                {product.character}
              </Text>
            </View>
          </View>

          <View className="mt-2.5 flex-row align-center">
            <Text className="text-base font-bold text-gray-500">Price:</Text>
            <Text className="ml-2 text-base text-gray-500" numberOfLines={12}>
              {product.price}
            </Text>
          </View>

          <View className="my-2.5  align-center">
            <Text className="mr-2 text-base font-bold text-gray-500">
              Release:
            </Text>
            <ProductRelease release={product.release} />
          </View>

          <View className="mt-2.5 flex-row align-center">
            <Text className="mr-2 text-base font-bold text-gray-500 ">
              Type:
            </Text>
            <ProductType type={product.type} />
          </View>

          <View className="mt-10 align-center">
            <ProductAddRemove product={product} />
          </View>
        </View>
      </View>

      <BasketIcon />
    </ScrollView>
  );
};

export default ProductDetailScreen;
