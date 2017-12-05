/** @module jumbogrove */
import Vue from 'vue'
import App from './App'
import JumboGroveDirector from "./jg";
import VueUI from "./jg/vueui";
import example from "./ld40/index";

Vue.config.productionTip = false

/* eslint-disable no-new */

/**
 * The main entry point for Jumbo Grove.
 * 
 * @example
 * import jumbogrove from 'jumbogrove';
 * jumbogrove('#game', {
 *  // your game here
 * });
 * 
 * @param {string} selector A CSS selector for the element you want the story to be rendered in.
 * @param {object} data Your story
 */
const jumbogrove = (selector, data) => {
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
  jumbogrove,
};

if (window.jumboGroveExample) {
  jumbogrove(window.jumboGroveExample, example);
}

export {
  jumbogrove,
}