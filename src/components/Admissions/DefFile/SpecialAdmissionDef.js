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
    title: 'CC Ref No',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Card No',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'CC Agent',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Claimants Name',
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
    title: 'Hospital',
    width: "20%",
    sortField: "name"
  },
 
  {
    name: "name",
    title: 'Admission Date',
    width: "20%",
    sortField: "name"
  },
  {
    name: "custom-actions",
    title: "Actions",
    width: "20%",
   

}
]