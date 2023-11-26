import axios from "axios";

let url = "https://restcountries.com/v3.1";

export const SearchCountries = async (search) => {
  try {
    const { data: response } = await axios.get(
      `${url}/name/${search}?fields=name,flags`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const GetAllCountries = async () => {
  try {
    const { data: response } = await axios.get(`${url}/all?fields=name,flags`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const GetCountryByName = async (name) => {
  try {
    const { data: response } = await axios.get(
      `${url}/name/${name}?fullText=true`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
