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
    width: "5%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Time',
    width: "5%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'CCA',
    width: "10%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Remarks',
    width: "30%",
    sortField: "name"
  },
  {
    name: "name",
    title: 'Special Note',
    width: "30%",
    sortField: "name"
  },
  {
    name: "custom-stage",
    title: "Stage",
    width: "10%",
   

},
  {
    name: "custom-actions",
    title: "Attachments",
    width: "10%",
   

}
]