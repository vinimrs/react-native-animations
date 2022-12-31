import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: Dimensions.get('window').width,
    paddingLeft: 60
  },
  image: {
    height: '100%',
    width: 150,
    marginHorizontal: 15
  }
});

export default styles;