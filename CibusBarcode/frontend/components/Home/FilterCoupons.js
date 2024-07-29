import React from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import HomeStyles from '../../styles/HomeStyles';

const FilterCoupons = ({ visible, onClose, onApplyFilter, selectedPlace, setSelectedPlace, placesList }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={HomeStyles.modalContainer}>
        <View style={HomeStyles.modalContent}>
          <Text style={HomeStyles.modalTitle}>Select Place to Filter</Text>
          <Picker
            selectedValue={selectedPlace}
            onValueChange={(itemValue) => setSelectedPlace(itemValue)}
            style={HomeStyles.picker}
          >
            {placesList.map((place, index) => (
              <Picker.Item key={index} label={place} value={place} />
            ))}
          </Picker>
          <Button title="Apply Filter" onPress={onApplyFilter} />
          <Button title="Cancel" onPress={onClose} color="red" />
        </View>
      </View>
    </Modal>
  );
};

export default FilterCoupons;
