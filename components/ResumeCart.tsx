import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {formatCurrency} from '../utils';
import {useNavigation} from '@react-navigation/native';

interface ResumeCartProps {
  basketTotal: number;
  navigateTo: string;
  navigateTitle: string;
}

const ResumeCart = ({
  basketTotal,
  navigateTo,
  navigateTitle,
}: ResumeCartProps) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    if (navigateTo === 'Basket') {
      navigation.navigate('Basket');
    } else {
      navigation.navigate('PreparingOrderScreen');
    }
  };
  return (
    <View className="p-5 mt-5 space-y-4 bg-white ">
      <View className="flex-row justify-between">
        <Text className="text-gray-400">SubTotal</Text>
        <Text className="text-gray-400">{formatCurrency(basketTotal)}</Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-gray-400">Delivery Fee</Text>
        <Text className="text-gray-400">{formatCurrency(1000)}</Text>
      </View>

      <View className="flex-row justify-between">
        <Text>Order Total</Text>
        <Text className="font-extrabold">
          {formatCurrency(basketTotal + 1000)}
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleNavigate}
        className="rounded-lg bg-[#2d3748] p-4">
        <Text className="text-lg font-bold text-center text-white">
          {navigateTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResumeCart;
