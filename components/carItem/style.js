import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  outerContainer: {
    // backgroundColor: 'grey',
    width: '100%',
    height: Dimensions.get('window').height, 
    //height: '100%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  carHeadings: {
    marginTop: '30%',
    alignItems: 'center',
    //backgroundColor: 'teal',
    width: '100%',
    height: '10%',
  },
  titleHeading: {
    fontSize: 32,
    fontWeight: '400',
  },
  titleSubheading: {
    fontSize: 14,
    color: 'grey',
  },

  buttonContainer:{
   position: 'absolute',
   bottom: 30,
   width:'100%'
  }
});
export default styles;
