import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from '../features/basketSlice';
import {Product} from '../types';
import {XCircleIcon} from 'react-native-heroicons/mini';
import {formatCurrency} from '../utils';
import ResumeCart from '../components/ResumeCart';

const BasketScreen = () => {
  const [gropedItems, setGropedItems] = useState<any[]>([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const basketItems = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  useMemo(() => {
    const groupedItems = basketItems.reduce((results: any, item: Product) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGropedItems(groupedItems);
  }, [basketItems]);

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="flex-1 bg-gray-100 ">
        <View className="p-5 bg-white border-b border-gray-300 shadow-xs ">
          <View>
            <Text className="text-xl font-bold text-center ">Basket</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute bg-gray-100 rounded-full top-3 right-2">
            <XCircleIcon size={35} color="#2d3748" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center px-4 py-3 my-5 space-x-4 bg-white">
          <Image
            className="w-12 h-12 p-4 bg-gray-300 rounded-full"
            source={require('../assets/img/deliveryMoto.jpg')}
          />
          <Text className="flex-1 text-md">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#2d3748] font-bold ">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(gropedItems).map(([key, product]) => (
            <View
              key={key}
              className="flex-row items-center px-5 py-2 space-x-3 bg-white">
              <Text className="text-xs text-[#2d3748] font-bold ">
                {product.length} x
              </Text>
              <Image
                resizeMode="contain"
                className="rounded-full w-14 h-14"
                source={{uri: product[0]?.image}}
              />
              <Text className="flex-1 text-xs text-[#2d3748]">
                {product[0]?.name}
              </Text>
              <Text className="text-xs text-gray-600">
                {formatCurrency(product[0]?.price)}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket(product[0].id))}>
                <Text className="text-[#2d3748] font-bold text-xs ">
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <ResumeCart
          basketTotal={basketTotal}
          navigateTo="PreparingOrderScreen"
          navigateTitle="Place Order"
        />
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
