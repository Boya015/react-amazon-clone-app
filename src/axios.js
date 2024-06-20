import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/zaio-25/us-centrall/api' //The API (cloud function URL)
})

export default instance 