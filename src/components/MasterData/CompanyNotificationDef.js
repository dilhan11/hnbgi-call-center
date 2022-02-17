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
    title: 'ID',
    width: "10%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Company Name',
    width: "30%",
    sortField: "name"
  },
 
  {
    name: "name",
    title: 'Policy Number',
    width: "20%",
    sortField: "name"
  },
  {
    name: "custom-notify",
    title: 'Notify',
    width: "10%",
  },
  {
    name: "custom-actions",
    title: "Actions",
    width: "10%",
}
]