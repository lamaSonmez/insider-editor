import ApiService from "@/api/api.service";

import constants from  './const';

const state = {
   current_template:{
       id:0,
       name:'',
       html:'',
       css:'',
       js:''
   },
   templates:[]
};

const getters = {
    [constants.GET_TEMPLATES] : state => {
        return state.templates;
    },
    [constants.GET_CURRENT_TEMPLATE] : state => {
        return state.current_template;
    },
};

const mutations = {
    [constants.SET_CURRENT_TEMPLATE] (state,data) {
        state.current_template = data;
    },
    [constants.SET_TEMPLATES] (state,data) {
        state.templates = data;
    },
};

const actions = {
    [constants.FETCH_TEMPLATES](context) {
        return new Promise((resolve, reject) => {
            ApiService.get("templates")
                .then(({data}) => {
                    console.log('data is ',data);
                    context.commit(constants.SET_TEMPLATES,data);
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
            console.log('fetch template iwth ',id);
            ApiService.get(`templates/${id}`)
                .then(({data}) => {
                    console.log('data is after fetch template,',data);
                    context.commit(constants.SET_CURRENT_TEMPLATE,data);
                    resolve(data);
                })
                .catch(({response}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    [constants.STORE_TEMPLATE](context,template) {
        return new Promise((resolve, reject) => {
            template.id = Math.random() + 100;
            ApiService.post(`templates`,template)
                .then(({data}) => {
                    context.commit(constants.SET_CURRENT_TEMPLATE,{data});
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
