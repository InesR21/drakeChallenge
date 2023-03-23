import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Product} from '../types';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from '../features/basketSlice';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/mini';

interface ProductAddRemoveProps {
  product: Product;
}

const ProductAddRemove = ({product}: ProductAddRemoveProps) => {
  const dispatch = useDispatch();
  const items: Product[] = useSelector(state =>
    selectBasketItemsWithId(state, product.id),
  );

  const handlePressView = (event: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    if (items.length === 0) {
      return;
    }

    dispatch(removeFromBasket(product.id));
  };
  return (
    <TouchableWithoutFeedback onPress={handlePressView}>
      <View className="flex flex-row justify-center w-full h-6 px-1 mb-1 ">
        <View className=" px-2 flex flex-row justify-between items-center bg-[#e1e5e9] shadow-lg rounded-md basis-[70%] h-full">
          <TouchableOpacity
            disabled={!items.length}
            onPress={removeItemFromBasket}>
            <MinusCircleIcon
              size={15}
              color={items.length > 0 ? '#2d3748' : 'gray'}
            />
          </TouchableOpacity>
          <Text className="px-1 text-xs font-semibold text-center text-[#2d3748]">
            {items.length}
          </Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon size={15} color="#2d3748" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductAddRemove;
