/** @module jumbogrove */
import Vue from 'vue'
import App from './App'
import JumboGroveDirector from "./jg";
import VueUI from "./jg/vueui";

Vue.config.productionTip = false

/* eslint-disable no-new */

/**
 * The main entry point for Jumbo Grove; call `jumbogrove.jumbogrove(selector, data)`
 * 
 * @example
 * import { jumbogrove } from 'jumbogrove';
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
  if (!document.querySelector(selector)) {
    throw new Error(`Can't run Jumbo Grove; no selector matches ${selector}`);
  }
  const existingClasses = document.querySelector(selector).className;
  new Vue({
    el: selector,
    template: '<App :director="director" :ui="ui" :class="existingClasses" />',
    components: { App },
    data: {director, ui, existingClasses},
  });
};

window.jumbogrove = {
  jumbogrove,
};

export {
  jumbogrove,
}