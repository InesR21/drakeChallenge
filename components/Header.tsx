import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ArrowLeftCircleIcon} from 'react-native-heroicons/mini';

const Header = () => {
  const navigation = useNavigation();
  const {name} = useRoute();
  return (
    <View className="flex flex-row items-center justify-center">
      {name === 'Home' ? null : (
        <TouchableOpacity
          className=""
          onPress={() => navigation.navigate('Home')}>
          <ArrowLeftCircleIcon size={35} color="#2d3748" />
        </TouchableOpacity>
      )}
      <View className="flex-1">
        <Text className="text-xl font-bold text-center">Amiibo Center</Text>
      </View>
    </View>
  );
};

export default Header;
