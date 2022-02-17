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
    title: 'Name',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Email',
    width: "30%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Address',
    width: "20%",
    sortField: "name"
  },
  {
    name: "visit-status",
    title: 'Visit status',
    width: "20%",
    sortField: "name"
  },
  {
    name: "status",
    title: 'Status',
    width: "20%",
    sortField: "name"
  },
  {
    name: "custom-actions",
    title: "Actions",
    width: "20%",
   

}
]