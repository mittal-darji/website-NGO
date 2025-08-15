// src/membershipApi.js

import apiClient from "./apiClient";

const createMembership = async (membershipData) => {
  try {
    const response = await apiClient.post("/membership", membershipData);
    return response.data; // Return the response data
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.error : "An error occurred"
    );
  }
};

export default {
  createMembership,
};
