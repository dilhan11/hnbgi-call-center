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
    title: 'Risk Type',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Annual Limit',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Event Limit',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Utilized Amount',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Pending Amount',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Balance',
    width: "20%",
    sortField: "name"
  },
]
