import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ApiService from '@/api/api.service';
import store from '@/store';

window.$ = window.jQuery = require('jquery');

const app = createApp(App);

ApiService.init();
app.use(router);
app.use(store);


app.mount('#app');