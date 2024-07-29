import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../../styles/HomeStyles'
import SwipeableCoupon from './SwipeableCoupon';

const CouponDetails = ({ coupons, handleCouponPress, error, onDelete  }) => {
    return (
        <View style={HomeStyles.container}>
          {error ? (
            <Text style={HomeStyles.errorText}>{error}</Text>
          ) : (
            coupons.map((coupon, index) => (
              <SwipeableCoupon 
                key={index} 
                coupon={coupon} 
                handleCouponPress={handleCouponPress} 
                onDelete={onDelete} 
              />
            ))
          )}
        </View>
      );
    };

export default CouponDetails;
