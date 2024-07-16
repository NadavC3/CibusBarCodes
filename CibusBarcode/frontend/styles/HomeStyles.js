import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: RFValue(80),
    backgroundColor: '#00bcd4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    marginBottom: 12,
  },
  addButton: {
    marginTop: 16,
    alignSelf: 'center',
  },
});

export default HomeStyles;
