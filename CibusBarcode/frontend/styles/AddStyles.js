import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const AddStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bcd4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: RFValue(15),
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '95%',
    maxWidth: 600,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textInput: {
    width: RFValue(222),
    height: RFValue(300),  // Increased height for better visibility
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    textAlignVertical: 'top',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddStyles;
