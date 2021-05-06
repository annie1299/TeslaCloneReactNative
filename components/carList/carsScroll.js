import React from 'react';
import {View, Text,Dimensions, FlatList} from 'react-native';
import styles from './style';
import CarItem from '../carItem/car';
import carsData from './carsData';

export default function CarsScroll(props) { 
  return (
    <View style={styles.container}>
      <FlatList
        data={carsData}
        renderItem={({item}) => <CarItem car={item}/>}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        showsVerticalScrollIndicator={false}  
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};
