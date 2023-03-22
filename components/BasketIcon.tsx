import {View, Text, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {selectBasketItems, selectBasketTotal} from '../features/basketSlice';
import {useNavigation} from '@react-navigation/native';
import {formatCurrency} from '../utils';

const BasketIcon = () => {
  const items = useSelector(state => selectBasketItems(state));
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  const BasketTotalFormat = useMemo(() => {
    return formatCurrency(basketTotal);
  }, [basketTotal]);
  return (
    <View className="absolute z-50 w-full bottom-16">
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className="mx-5 bg-[#2d3748] p-2 rounded-md flex-row">
        <Text className="px-2 py-1 text-lg font-extrabold text-white rounded-xl bg-slate-600 ">
          {items.length}
        </Text>
        <Text className="flex-1 text-lg font-extrabold text-center text-white ">
          View Basket
        </Text>
        <Text className="text-lg font-extrabold text-white">
          {BasketTotalFormat}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
