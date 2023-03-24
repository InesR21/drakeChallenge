/* eslint-disable react-native/no-inline-styles */
import {StatusBar} from 'react-native';
import React from 'react';
import {MotiView} from 'moti';

const Loading = ({size}: {size: number}) => {
  return (
    <>
      <StatusBar hidden />
      <MotiView
        from={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 0,
          shadowOpacity: 0.5,
        }}
        animate={{
          width: size + 20,
          height: size + 20,
          borderRadius: (size + 20) / 2,
          borderWidth: size / 10,
          shadowOpacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
          loop: true,
        }}
        style={{
          width: size,
          height: size,
          backgroundColor: '#2d3748',
          borderRadius: size / 2,
          borderWidth: size / 10,
          borderColor: '#fff',
          shadowColor: '#fff',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 10,
        }}
      />
    </>
  );
};

export default Loading;
