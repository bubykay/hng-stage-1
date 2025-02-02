import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://numbersapi.com/",
    });
  }

  async get(url) {
    try {
      const response = await this.api.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default new ApiService();
