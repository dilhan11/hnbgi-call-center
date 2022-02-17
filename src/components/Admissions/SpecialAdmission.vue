<template>
<div>
    <b-card>
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0">Special Admissions Search </h3>
            </b-col>
        </b-row>
       <b-row>
            <b-col lg="3">
                  <div class="form-group">
                    <label class="form-control-label">CC Ref Number</label>
                    <b-input type="text"  placeholder="Enter CC Ref. Number">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="3">
                 <div class="form-group">
                    <label class="form-control-label">Card Number</label>
                    <b-input type="text"  placeholder="Enter Card Number">
                    </b-input>
                      </div>
            </b-col>
               <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">CC Agent</label>
                    <b-input type="text"  placeholder="Enter CC Agent">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="3">
                 <div class="form-group">
                    <label class="form-control-label">Admission Date</label>
                    <b-input type="date"  placeholder="Enter Policy Number">
                    </b-input>
                      </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">NIC</label>
                    <b-input type="text"  placeholder="Enter NIC Number">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Select Hospital</label>
                    <b-form-select type="text"  placeholder="Username" v-model="selected" :options="options">
                    </b-form-select>
                </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Claimant's Name</label>
                    <b-input type="text"  placeholder="Enter Policy Number">
                    </b-input>
                      </div>
            </b-col>

            <b-col lg="3">
                <div class=" pt-4 mt-2">
                    <b-button variant="primary">Search</b-button>
                    <b-button variant="">Clear</b-button>
                </div>
            </b-col>
        </b-row>
    </b-card>

      <card class="mt-3 mb-3">
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0">Special Admissions 
                </h3>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="12">
                <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="fields" :sort-order="sortOrder" data-path="data" :per-page="5" pagination-path="" @vuetable:pagination-data="onPaginationData">
                    <div slot="custom-actions">
                        <b-button variant="success" size="sm">View Map</b-button>
                    </div>

                    <div slot="status">
                        <b-badge variant="danger">CCO/MPM PENDING</b-badge>
                    </div>
                </vuetable>

                <b-card-footer class="py-4 d-flex justify-content-end">
                    <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
                </b-card-footer>
            </b-col>
        </b-row>
    </card>
</div>
</template>

<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import SpecialAdmissionDef from "./DefFile/SpecialAdmissionDef.js";

export default {
 components: {
        Vuetable,
    },
    data() {
        return {
            fields: SpecialAdmissionDef,
        };
    },
}
</script>

<style scoped>
</style>
