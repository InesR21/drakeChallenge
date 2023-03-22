import {View, Text} from 'react-native';
import React from 'react';
import {Release} from '../utils';

interface ProductReleaseProps {
  release: Release;
}

const ProductRelease = ({release}: ProductReleaseProps) => {
  return (
    <View className="flex flex-row justify-between w-3/4 ">
      <View>
        <Text className="my-2 text-xs font-bold text-gray-500">
          🇺🇸 {release.na || 'No release'}
        </Text>
        <Text className="text-xs font-bold text-gray-500">
          🇯🇵 {release.eu || 'No release'}
        </Text>
      </View>
      <View>
        <Text className="my-2 text-xs font-bold text-gray-500">
          🇪🇺 {release.au || 'No release'}
        </Text>
        <Text className="text-xs font-bold text-gray-500">
          🇦🇺 {release.jp || 'No release'}
        </Text>
      </View>
    </View>
  );
};

export default ProductRelease;
