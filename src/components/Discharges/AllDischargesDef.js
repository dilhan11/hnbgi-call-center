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
    title: 'Company Name',
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
    title: 'Admission date',
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
    title: 'Ailment',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Assigned Person',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Assignment Date & Time',
    width: "20%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'BHT',
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