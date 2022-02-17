<template>
<div>
    <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="fields" :sort-order="sortOrder" data-path="data" :per-page="2" pagination-path="" @vuetable:pagination-data="onPaginationData">
  <div slot="custom-actions" >
                      <b-button size="sm" to="/AdmissionForm" variant="primary">Create Admission</b-button>
                      
                </div>
    </vuetable>
</div>
</template>

<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import FieldsDef from "./FieldsDef.js";
import AdmissionForm from '@/views/Admissions/AdmissionForm.vue';
export default {
        components: {
        Vuetable,
        AdmissionForm
    },

    data() {
        return {
            fields: FieldsDef,
        };
    },


}
</script>

<style scoped>

</style>
