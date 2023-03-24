import {Text, SafeAreaView, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Loading from '../components/Loading';

const PreparingOrderScreen = () => {
  const navigate = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate.navigate('Delivery');
    }, 4000);
  }, [navigate]);
  return (
    <SafeAreaView className="flex-1 bg-[#2d3748] items-center justify-center space-y-16 ">
      <View className="">
        <Loading size={100} />
      </View>
      <View>
        <Text className="text-lg font-extrabold text-white ">
          Preparing Order...
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
