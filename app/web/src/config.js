import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://regstudent.herokuapp.com/api"
})