import Vue from 'vue';
import DataUI from "./dataui";
import JGHTMLItem from "@/components/JGHTMLItem";
import JGChoiceItem from "@/components/JGChoiceItem";
import JGInputItem from "@/components/JGInputItem";

export default class VueUI extends DataUI {
  constructor() {
    super(...arguments);
    this.componentMap = {
      'html': JGHTMLItem,
      'choice': JGChoiceItem,
      'input': JGInputItem,
    };
    this.bus = new Vue();
  }

  append() {
    if (!this.componentMap[arguments[0].type]) {
      throw Error(`Missing component for type ${arguments[0].type}`);
    }
    this.bus.$emit('refocus');
    super.append.apply(this, arguments);
  }

  register(type, VueComponentClass) {
    this.componentMap[type] = VueComponentClass;
  }
}