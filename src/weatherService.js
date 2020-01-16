import axios from "axios"
import { API_KEY, API_BASE_URL} from "./config"

const getCities = async () => {
    let response = await axios.get('./city.list.json')
    return response.data;
 }

const getWeatherDataForCity = async (cityId, limit) => {
   let response = await axios.get(encodeURI(`${API_BASE_URL}?id=${cityId}&cnt=${limit}&units=metric&appid=${API_KEY}`))
   return response.data.list;
}

export { getWeatherDataForCity, getCities }