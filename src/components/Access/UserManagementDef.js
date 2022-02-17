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
    title: 'EPF No',
    width: "10%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Last Name',
    width: "30%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'First Name',
    width: "30%",
    sortField: "name"
  },
 
  {
    name: "name",
    title: 'Email',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Contact No',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Role',
    width: "30%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Other Permission',
    width: "30%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Last Updated',
    width: "30%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Status',
    width: "30%",
    sortField: "name"
  },
  {
    name: "custom-actions",
    title: "Actions",
    width: "10%",
   

}
]