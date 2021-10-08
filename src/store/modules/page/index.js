import ApiService from "@/api/api.service";

import constants from  './const';

const state = {
   current_template:null,
   templates:[]
};

const getters = {
    [constants.GET_TEMPLATES] : state => {
        return state.templates;
    },
    [constants.GET__CURRENT_TEMPLATE] : state => {
        return state.current_template;
    },
};

const mutations = {
    [constants.SET_CURRENT_TEMPLATE] (state,data) {
        state.current_template = data.current_template;
    },
    [constants.SET_TEMPLATES] (state,data) {
        state.templates = data.templates;
    },
};

const actions = {
    [constants.FETCH_TEMPLATES](context) {
        return new Promise((resolve, reject) => {
            ApiService.get("templates")
                .then(({data}) => {
                    context.commit(constants.SET_TEMPLATES,{value:data});
                    resolve(data);
                })
                .catch(({response}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    [constants.FETCH_TEMPLATE](context,id) {
        return new Promise((resolve, reject) => {
            ApiService.get(`templates/${id}`)
                .then(({data}) => {
                    context.commit(constants.SET_CURRENT_TEMPLATE,{value:data});
                    resolve(data);
                })
                .catch(({response}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
};

export default {
    getters,
    actions,
    mutations,
    state
}
