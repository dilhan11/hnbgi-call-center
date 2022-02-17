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
  //   width: "10%",
  // },
  {
    name: "name",
    title: 'Date',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Time',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Assigned By',
    width: "30%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'CCO/MPM Name',
    width: "30%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Stage',
    width: "20%",
    sortField: "name"
  },

]