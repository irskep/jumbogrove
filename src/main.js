// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import JumboGroveDirector from "@/jg";
import example from "@/ld40";

Vue.config.productionTip = false

/* eslint-disable no-new */

const run = (selector, data) => {
  new Vue({
    el: selector,
    template: '<App :director="director" />',
    components: { App },
    data: {
      director: new JumboGroveDirector(data),
    },
  })
};


window.JumboGrove = {
  run,
};

if (window.jumboGroveExample) {
  run(window.jumboGroveExample, example);
}

export {
  run,
}