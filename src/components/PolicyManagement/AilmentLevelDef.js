import Vue from 'vue'
import moment from "moment";
import accounting from "accounting";
import VuetableFieldSequence from 'vuetable-2/src/components/VuetableFieldSequence.vue'
import VuetableFieldCheckbox from 'vuetable-2/src/components/VuetableFieldCheckbox.vue'
Vue.component('vuetable-field-checkbox', VuetableFieldCheckbox)

export default [
 
  // {
  //   name: 'vuetable-field-checkbox',
  //   title: "checkbox",
  //   width: "5%"
  // },
  {
    name: "name",
    title: 'Description',
    width: "70%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Excess %',
    width: "30%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Excess Amount',
    width: "30%",
    sortField: "name"
  },
]
