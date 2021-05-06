import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import styles from './style';
import ButtonComp from '../buttonsComp/button';

export default function CarItem(props) {
  // const name = props.name;
  // const price = props.price;
  // const image = props.image;

  const {name, tagline, taglineCTA, image} = props.car;

  return (
    <View style={styles.outerContainer}>
      <ImageBackground source={image} style={styles.bgImage}></ImageBackground>
      <View style={styles.carHeadings}>
        <Text style={styles.titleHeading}>{name}</Text>
        <Text style={styles.titleSubheading}>
          {tagline} {taglineCTA}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComp
          type="primary"
          content={'Custom Order'}
          onPress={() => {
            console.warn('custom was pressed');
          }}
        />
        <ButtonComp
          type="secondary"
          content={'Existing Inventory'}
          onPress={() => {
            console.warn('Existing Inventory was pressed');
          }}
        />
      </View>
    </View>
  );
}
