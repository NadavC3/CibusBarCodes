import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
    container: {
      paddingTop: RFValue(80),
      flex: 1,
      backgroundColor: '#00bcd4',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    infoFields: {
      width: '100%',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    input: {
      width: '100%',
      padding: 15,
      marginVertical: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      borderRadius: 10,

    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#007BFF',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    error: {
      color: 'red',
      marginBottom: 10,
    },
    logo: {
      width: 100,
      height: 100,
      marginBottom: 50,
    },
    successMessageText: {
      marginTop: 10,
      fontSize: 16,
      color: 'green',
      textAlign: 'center',
    },
    errorMessageText: {
      marginTop: 10,
      fontSize: 16,
      color: '#e62532',
      textAlign: 'center',
    },
    scrollContainer: {
      flex: 1, 
      flexDirection: 'column',
      justifyContent: 'center',
      flexGrow: 1,
      backgroundColor: '#00bcd4',
    },
  });