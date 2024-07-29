import axios from 'axios';
import config from './config';



const fetchCoupons  = async (userId) => {
    try {
        const response = await axios.get(`${config.baseUrl}/getUserCoupons/${userId}`);
        return response.data.coupons;
      } catch (error) {
        console.error('Error fetching coupons:', error);
        setError('Failed to load coupons');
      } 
    };

const handleFilter = (coupons, selectedPlace, setFilteredCoupons, setFilterModalVisible) => {
  if (selectedPlace === 'All') {
    setFilteredCoupons(coupons);
  } else {
    // Filter coupons based on selected place
    const filtered = coupons.filter(coupon =>
      coupon.acceptedAt.toLowerCase().includes(selectedPlace.toLowerCase())
    );
    setFilteredCoupons(filtered);
  }
  setFilterModalVisible(false);
};

const generatePlacesList = (coupons) => {
  const uniquePlaces = new Set(coupons.map(coupon => coupon.acceptedAt));
  return ['All', ...Array.from(uniquePlaces)];
};

const deleteCoupon = async (userId, couponId) => {
  try {
    const response = await axios.delete(`${config.baseUrl}/coupons/${userId}/${couponId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete coupon');
  }
};

export { fetchCoupons, handleFilter, generatePlacesList, deleteCoupon };
