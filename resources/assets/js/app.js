
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Swal from 'vue-sweetalert';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Swal);

// Config
Vue.http.headers.common['X-CSRF-TOKEN'] = window.csrfToken;

// Routes
import routes from './routes';

const router = new VueRouter({
      routes
  });

const app = new Vue({
    router
}).$mount('#app');

