import React, { useState }  from 'react';

import { View, Text, StyleSheet } from 'react-native';
import AddStyles from '../styles/AddStyles';
import AddCoupon from '../components/Add/AddCoupon';

const Add = ({ route }) => {
  const { userId } = route.params; 
  const [smsMessage, setSmsMessage] = useState('');

  return (
    <View style={AddStyles.container}>
      <AddCoupon
        smsMessage={smsMessage}
        setSmsMessage={setSmsMessage}
        userId={userId}
      />
    </View>
  );
};



export default Add;
