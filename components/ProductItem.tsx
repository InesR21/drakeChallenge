import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Product} from '../types';
import ProductRelease from './ProductRelease';
import ProductType from './ProductType';
import {formatCurrency} from '../utils';
import ProductAddRemove from './ProductAddRemove';

interface ProductItemProps {
  product: Product;
}

const ProductItem = React.memo(({product}: ProductItemProps) => {
  const navigation = useNavigation();

  const formatPrice = useMemo(() => {
    return formatCurrency(product.price);
  }, [product.price]);

  return (
    <View className="flex flex-1 w-full p-0.5 m-2 bg-white shadow-md rounded-xl">
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {product})}>
        <View className="flex items-start justify-between p-1 ">
          <View className="flex flex-row items-center justify-between w-full">
            <Text
              numberOfLines={2}
              className="mt-1 text-xs font-bold text-center text-gray-500">
              {product.character}
            </Text>
            <ProductType type={product.type} />
          </View>
          <Text
            numberOfLines={2}
            className="mt-1 text-xs font-bold text-center text-gray-500">
            {product.amiiboSeries}
          </Text>
        </View>
        <View className="w-full p-1 h-44 rounded-t-xl">
          <Image
            resizeMode="contain"
            className="w-full h-full"
            source={{uri: product.image}}
          />
        </View>
        <View className="flex flex-row items-start justify-between p-1">
          <Text className="text-xs font-bold text-gray-500">Name:</Text>
          <Text className="text-xs text-gray-500" numberOfLines={12}>
            {product.name}
          </Text>
        </View>

        <View className="flex flex-row items-start justify-between p-1">
          <Text className="text-xs font-bold text-gray-500">Price:</Text>
          <Text className="text-xs text-gray-500" numberOfLines={12}>
            {formatPrice}
          </Text>
        </View>

        <View className="my-2.5 p-1 tems-start justify-between">
          <Text className="text-xs font-bold text-gray-500">Release:</Text>
          <ProductRelease release={product.release} />
        </View>

        <ProductAddRemove product={product} />
      </TouchableOpacity>
    </View>
  );
});

export default ProductItem;
