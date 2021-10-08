import {createStore} from 'vuex';

import createPersistedState from 'vuex-persistedstate';
import page from './modules/page';

import _ from 'lodash';

const modules = {
    page 
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
            paths: ['page'],
        }),
    ]
});
