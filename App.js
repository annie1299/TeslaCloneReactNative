import React from 'react';
import {View, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import CarItem from './components/carItem/car';
import CarsScroll from './components/carList/carsScroll'

export default function App() {
  return (
    <View styles={style.container}>
      {/* <CarItem
        name="Model S"
        price="Starting at $69420"
        image={require('./assets/images/ModelX.jpeg')}
      /> */}
      <CarsScroll/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
