import React from 'react';
import styles from './style';
import {View, Text, Pressable} from 'react-native';
export default function ButtonComp(props) {
  const typeOfButton = props.type;
  const textOnButton = props.content;
  const onPress = props.onPress;

  //console.warn(typeOfButton);
  const backgroundColorOfButton =
    typeOfButton === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColorOnButtton = typeOfButton === 'primary' ? '#FFFFFF' : '#171A20';
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColorOfButton}]}
        onPress={() => onPress()}>
        <Text style={[styles.buttonText, {color: textColorOnButtton}]}>
          {textOnButton}
        </Text>
      </Pressable>
    </View>
  );
}
