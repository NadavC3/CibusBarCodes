import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import HomeStyles from '../../styles/HomeStyles';
import { RFValue } from 'react-native-responsive-fontsize';


const SwipeableCoupon = ({ coupon, onDelete, handleCouponPress }) => {
  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
    });

    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(coupon)}
      >
        <Animated.Text style={[styles.deleteText, { transform: [{ scale }] }]}>
        <Image 
            source={require('../../assets/delete.png')} 
            style={HomeStyles.deleteImage}
          />
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={HomeStyles.couponContainer}>
        <TouchableOpacity onPress={() => handleCouponPress(coupon.link)}>
          <Text style={HomeStyles.couponTextBold}>₪{coupon.amount.toFixed(0)}</Text>
          <Text style={HomeStyles.couponText}>{coupon.acceptedAt}</Text>
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 80,
    height: RFValue(80),
    marginTop:RFValue(6),
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SwipeableCoupon;
