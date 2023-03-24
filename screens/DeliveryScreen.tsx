import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {XCircleIcon} from 'react-native-heroicons/mini';

const DeliveryScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-gray-100">
      <SafeAreaView>
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XCircleIcon size={35} color="#2d3748" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#2d3748]">Order Help</Text>
        </View>
        <View className="z-50 p-6 mx-5 my-2 bg-white rounded-md shadow-md">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg test-gray-400 ">Estimated Arrival</Text>
              <Text className="text-4xl font-bol">45-55 minutes</Text>
            </View>
            <Image
              className="w-20 h-20"
              source={require('../assets/img/deliveryMoto.jpg')}
            />
          </View>
        </View>
      </SafeAreaView>
      <View className="flex-1 -mt-14 -z-20">
        <Image
          className="w-full h-full "
          source={require('../assets/img/mapCity.jpg')}
        />
      </View>
      <SafeAreaView className="flex-row items-center space-x-5 bg-gray-100 h-28">
        <Image
          className="w-12 h-12 p-4 ml-5 bg-gray-300 rounded-full"
          source={require('../assets/img/deliveryMoto.jpg')}
        />
        <View className="flex-1">
          <Text className="text-lg text-[#2d3748] font-semibold">
            Ines Rojas
          </Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#2d3748] text-lg mr-5 font-bold"> Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
