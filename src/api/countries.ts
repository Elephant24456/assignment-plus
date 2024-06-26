import axios from "axios";

export const getData = async() => {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      console.log(response);
  }
