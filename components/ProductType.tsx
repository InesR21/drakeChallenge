import {View, Text} from 'react-native';
import React from 'react';
import {getBackgroundColor, getTextColor} from '../utils';

interface ProductTypeProps {
  type: string;
}
const ProductType = ({type}: ProductTypeProps) => {
  const backgroundColor = getBackgroundColor(type);
  const textColor = getTextColor(type);
  return (
    <View
      style={{
        backgroundColor,
      }}
      className="items-center justify-center px-0.5 rounded ">
      <Text
        style={{
          color: textColor,
        }}
        className="text-xs font-bold text-cente">
        {type}
      </Text>
    </View>
  );
};

export default ProductType;
