import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Linking, TouchableOpacity,Image } from 'react-native';
import HomeStyles from '../styles/HomeStyles';
import { fetchCoupons, handleFilter , generatePlacesList, deleteCoupon  } from '../controllers/HomeController';
import CouponDetails from '../components/Home/CouponDetails';
import FilterCoupons from '../components/Home/FilterCoupons';

const Home = ({ route }) => {
  const { userId } = route.params; 
  const [coupons, setCoupons] = useState([]);
  const [filteredCoupons, setFilteredCoupons] = useState([]);
  const [error, setError] = useState('');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState('All');

  useEffect(() => {
    const getCoupons = async (userId) => {
      try {
        const responseCoupons = await fetchCoupons(userId);
        setCoupons(responseCoupons);
        setFilteredCoupons(responseCoupons);
      } catch (error) {
        console.error('Error fetching coupons:', error);
        setError('Failed to load coupons');
      }
    };
    getCoupons(userId);
  }, [userId]);


    
  const handleCouponPress = (link) => {
    Linking.openURL(link);
  };


  const handleDelete = async (couponToDelete) => {
    try {
      await deleteCoupon(userId, couponToDelete._id);
      setFilteredCoupons(filteredCoupons.filter(coupon => coupon._id !== couponToDelete._id));
      setCoupons(coupons.filter(coupon => coupon._id !== couponToDelete._id));
    } catch (error) {
      Alert.alert('Error', 'Failed to delete coupon');
    }
  };
  

  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.filterContainer}>
        <TouchableOpacity 
          style={HomeStyles.filterButton} 
          onPress={() => setFilterModalVisible(true)}
        >
          <Image 
            source={require('../assets/filter.png')} 
            style={HomeStyles.filterImage}
          />
        </TouchableOpacity>
      </View>
  
      <ScrollView contentContainerStyle={HomeStyles.scrollContainer}>
        <CouponDetails 
        coupons={filteredCoupons} 
        handleCouponPress={handleCouponPress} 
        error={error} 
        onDelete={handleDelete}

        />
      </ScrollView>
  
      <FilterCoupons
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        onApplyFilter={() => handleFilter(coupons, selectedPlace, setFilteredCoupons, setFilterModalVisible)}
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        placesList={generatePlacesList(coupons)} 
      />
    </View>
  );
};
export default Home;
