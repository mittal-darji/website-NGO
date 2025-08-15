// src/api/donationApi.js
import apiClient from "./apiClient"; // Ensure this points to your Axios instance

export const createDonation = async (donationData) => {
  try {
    const response = await apiClient.post("/payment/", donationData); // Ensure the endpoint is correct
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message || "Payment processing failed"
      );
    } else if (error.request) {
      throw new Error("No response from server. Please check your connection.");
    } else {
      throw new Error("Request setup error: " + error.message);
    }
  }
};
