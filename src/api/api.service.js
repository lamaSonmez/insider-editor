import axios from "axios";

import {VUE_APP_API_URL} from "@/config";

const ApiService = {
    init(){
        axios.defaults.baseURL = VUE_APP_API_URL;
    },

    get(resource) {
         return axios.get(`${resource}`).catch(error => {
             throw new Error(`[RWV] ApiService ${error}`);
         });
     },
    
    post(resource, params) {
        return axios.post(`${resource}`, params);
    },
};

export default ApiService;