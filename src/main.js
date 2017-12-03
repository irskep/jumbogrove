// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import JumboGroveDirector from "@/jg";
import VueUI from "@/jg/vueui";
import example from "@/ld40/index";

Vue.config.productionTip = false

/* eslint-disable no-new */

const run = (selector, data) => {
  const director = new JumboGroveDirector(data);
  const ui = new VueUI();
  director.bindToUI(ui);
  new Vue({
    el: selector,
    template: '<App :director="director" :ui="ui" />',
    components: { App },
    data: {director, ui},
  });
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