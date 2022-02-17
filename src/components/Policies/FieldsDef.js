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
    title: 'Card Number',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'EPF',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Title',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Employee Name',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'DOB',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Company Name',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'NIC',
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
    title: 'Cover Period',
    width: "20%",
    sortField: "name"
  },
  {
    name: "custom-actions",
    title: "Actions",
    width: "20%",
   

}
]