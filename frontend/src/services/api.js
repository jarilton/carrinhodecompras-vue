import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000"
  /* baseURl: 'https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/api' */
})



export default api; 