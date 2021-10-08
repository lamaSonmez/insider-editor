import {createStore} from 'vuex';

import createPersistedState from 'vuex-persistedstate';

import _ from 'lodash';

const modules = {
   
};

export default createStore({
    mutations: {
        resetState(state) {
            _.forOwn(modules, (value, key) => {
                state[key] = _.cloneDeep(value.state);
            });
        },
    },
    modules,
    plugins: [
        createPersistedState({
            paths: ['auth'],
        }),
    ]
});
