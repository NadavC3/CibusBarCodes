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
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  card: {
    marginBottom: 12,
  },
  addButton: {
    marginTop: 16,
    alignSelf: 'center',
  },
  couponContainer: {
    height: RFValue(80),
    width: RFValue(250),
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  couponText: {
    fontSize: RFValue(18),
    color: '#333',
    marginBottom: 3,
    textAlign: 'center',
  },
  couponTextBold: {
    fontSize: RFValue(18),
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  errorText: {
    fontSize: RFValue(16),
    color: 'red',
    textAlign: 'center',
    marginVertical: 16,
  },
  filterContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    marginBottom: 16,
  },
  filterButton: {
    backgroundColor: 'transparent', 
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  filterImage: {
    width: RFValue(24), 
    height: RFValue(24), 
  },
  deleteImage: {
    width: RFValue(15), 
    height: RFValue(20), 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    maxWidth: 400, 
  },
  picker: {
    width: '100%',
    height: RFValue(150),
    marginBottom: 20,
  },
});

export default HomeStyles;
