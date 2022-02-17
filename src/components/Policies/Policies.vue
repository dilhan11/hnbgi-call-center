<template>
<div>
    <b-card>
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0">Search Member </h3>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="3">
                  <div class="form-group">
                    <label class="form-control-label">Card Number</label>
                    <b-input type="text" placeholder="Enter Your Card Number">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                 <div class="form-group">
                    <label class="form-control-label">Name</label>
                    <b-input type="text" placeholder="Enter Your Name">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                 <div class="form-group">
                    <label class="form-control-label">Policy Number</label>
                    <b-input type="text" placeholder="Enter Your Policy Number">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                  <div class="form-group">
                    <label class="form-control-label">NIC</label>
                    <b-input type="text" placeholder="Enter Your NIC Number">
                    </b-input>
                </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <div class="form-group">
                    <label class="form-control-label">Select Your Search Type</label>
                    <b-form-select type="text"  placeholder="Username" v-model="selected" :options="options">
                    </b-form-select>
                </div>
            </b-col>
            <b-col lg="6">
                  <div class="form-group">
                    <label class="form-control-label">Value</label>
                    <b-input type="text" placeholder="Enter Your Value">
                    </b-input>
                </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <div class="float-right">
                      <b-button variant="primary">Search</b-button>
                    <b-button variant="">Clear</b-button>
                </div>
            </b-col>
        </b-row>
    </b-card>

    <card class="mt-3 mb-3">
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0"> Search Results
                </h3>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="12">
                <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="fields" :sort-order="sortOrder" data-path="data" :per-page="5" pagination-path="" @vuetable:pagination-data="onPaginationData">
                    <div slot="custom-actions" >
                      <b-button size="sm" to="policymanagement/" variant="warning">View</b-button>
                      
                </div>
                </vuetable>
            </b-col>
        </b-row>
    </card>
</div>
</template>

<script>
import Card from '../Cards/Card.vue'
import Vuetable from "vuetable-2/src/components/Vuetable";
import FieldsDef from "./FieldsDef.js";
export default {
    components: {
        Card,
        Vuetable,
    },
    data() {
        return {
            fields: FieldsDef,
            selected: null,
            options: [{
                    value: null,
                    text: 'Please select an option'
                },
                {
                    value: 'a',
                    text: 'Company Name'
                },
                {
                    value: 'b',
                    text: 'EPF'
                },
                {
                    value: 'c',
                    text: 'Mobile Number'
                },
                {
                    value: 'd',
                    text: 'Pension Number (Buhuman Policy)'
                },
                {
                    value: 'e',
                    text: 'Account Number (Bank Related Products)'
                }
            ]
        };
    },

}
</script>

<style scoped>

</style>
