import React, { useState }  from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import { addCouponFromSMS } from '../../controllers/AddController';
import AddStyles from '../../styles/AddStyles';

const AddCoupon = ({smsMessage, setSmsMessage, userId }) => {

    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = async () => {
        try {
          console.log("handleSubmit");
          const coupon = await addCouponFromSMS(smsMessage,userId);
          setSmsMessage('');
        } catch (error) {
          console.error('Error adding coupon:', error);
          setErrorMessage('Failed to add coupon.');
        }
      }
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={AddStyles.container}
        >
          <ScrollView contentContainerStyle={AddStyles.scrollContainer}>
            <View style={AddStyles.innerContainer}>
              <TextInput
                style={AddStyles.textInput}
                placeholder="Enter SMS message"
                value={smsMessage}
                onChangeText={setSmsMessage}
                multiline
              />
              {errorMessage ? <Text style={AddStyles.errorText}>{errorMessage}</Text> : null}
              <TouchableOpacity style={AddStyles.button} onPress={handleSubmit}>
                <Text style={AddStyles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      );
    };


export default AddCoupon;
