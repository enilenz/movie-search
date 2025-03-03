import axios from 'axios';

// This class handles all API requests and responses
class HttpService {
  // Function to fetch movie data via title
  async getDataViaTitle(payload) {
    try {
      const url = `http://www.omdbapi.com/?apikey=9f19a4bc&t=${payload}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Request Failed with error:", error);
      throw error;
    }
  }

  // Function to fetch movie data via id
  async getDataViaId(payload) {
    try {
      const url = `http://www.omdbapi.com/?apikey=9f19a4bc&i=${payload}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Request Failed with error:", error);
      throw error;
    }
  }
}


export default new HttpService()
