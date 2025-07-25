import apiClient from "../API/apiClient";

export const sendContactUsMessage = async (contactData) => {
  try {
    const response = await apiClient.post("/contactus", contactData);
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error sending contact us message:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
