import axios from "axios";
import { Countrytype } from "../types/countrytype";

export const getData = async (): Promise<Countrytype[]> => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    console.log(response.data);

    return response.data;
}