// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import JumboGroveDirector from "@/jg";

Vue.config.productionTip = false

/* eslint-disable no-new */

const runJumboGrove = (data, selector = '#app') => {
  new Vue({
    el: selector,
    template: '<App :director="director" />',
    components: { App },
    data: {
      director: new JumboGroveDirector(data),
    },
  })
};


import example from "@/game";
runJumboGrove(example)