import {Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigate = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate.navigate('Home');
    }, 4000);
  }, [navigate]);
  return (
    <SafeAreaView className="flex-1 bg-[#2d3748] justify-center items-center">
      <Text className="my-10 text-lg font-extrabold text-white">
        Preparing Order...
      </Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
