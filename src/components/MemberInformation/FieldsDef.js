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
    title: 'Card No',
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
    title: 'Name',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Relationship',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Gender',
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
    title: 'NIC',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Restricted Ailments',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Pending Claims',
    width: "20%",
    sortField: "name"
  },
  {
    name: "custom-actions",
    title: "Actions",
    width: "20%",
   

}
]
