import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  ArrowLeftCircleIcon,
  ShoppingCartIcon,
} from 'react-native-heroicons/mini';

const Header = () => {
  const navigation = useNavigation();
  const {name} = useRoute();
  return (
    <View
      className={`'flex flex-row px-3 justify-center items-center', ${
        name === 'Home' ? null : 'justify-between'
      }`}>
      {name === 'Home' ? null : (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ArrowLeftCircleIcon size={35} color="#2d3748" />
        </TouchableOpacity>
      )}
      <View>
        <Text className="text-xl font-bold text-center">Amiibo Center</Text>
      </View>
      {name === 'Details' ? (
        <TouchableOpacity onPress={() => navigation.navigate('MiniCart')}>
          <ShoppingCartIcon size={30} color="#2d3748" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;
