import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectBasketTotal} from '../features/basketSlice';
import ResumeCart from '../components/ResumeCart';

const MiniCart = () => {
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <View className="justify-center flex-1 w-full bg-white ">
      <View>
        <Text className="text-xl font-bold text-center ">Mini Cart</Text>
        <Text className="mt-4 font-bold text-center text-gray-400 text-md ">
          Are you ready to finalize the purchase?
        </Text>
      </View>
      <ResumeCart
        basketTotal={basketTotal}
        navigateTo="Basket"
        navigateTitle="Go to basket"
      />
    </View>
  );
};

export default MiniCart;
