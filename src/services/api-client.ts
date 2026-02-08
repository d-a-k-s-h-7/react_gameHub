import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api", 
    params: {
        key: '712e669fd5d8428e97c1beb24226a914'
    }
})