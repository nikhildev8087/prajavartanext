import axios from "axios";
import { ADS_URL, PACKAGE_NAME, SALT, SIGN_KEY, WEB_URL } from "../constant/common";

export const getNewsData = async (data) => {
  let newData = {
    salt: SALT,
    sign: SIGN_KEY,
    package_name: PACKAGE_NAME,
   ...data,
  };
  const encodedData = btoa(JSON.stringify(newData));

  const formdata = new FormData();

  formdata.append("data", encodedData);
  try {
    return await axios.post(`${WEB_URL}`, formdata);
  } catch (err) {
    throw err;
  }
};


//news ads
export const getNewsAds = async (adClass, adId) => {
  try {
    const response = await axios.get(`${ADS_URL}?t=${adClass}&f=${adId}`);
    return response.data; // Assuming the API returns the ad content directly
  } catch (error) {
    throw error;
  }
};