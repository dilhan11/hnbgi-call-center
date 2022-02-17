<template>
<div>
    <b-card>
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0">Search Approval</h3>
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
                    <label class="form-control-label">Policy Number</label>
                    <b-input type="text"  placeholder="Enter Policy Number">
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
                    <label class="form-control-label">Admission Date</label>
                    <b-input type="date"  placeholder="Enter Policy Number">
                    </b-input>
                      </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Select Ailment</label>
                    <b-form-select type="text"  placeholder="Username" v-model="selected" :options="options">
                    </b-form-select>
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
                <h3 class="mb-0">Approval List
                </h3>
            </b-col>
        </b-row>

        <b-row class="pb-3">
            <b-col>
                <label class="label pr-4">Special Admissions : <div class="color-block" style="background-color:#efa7a7"></div></label>
                <label class="label  pr-4">Admissions with CIC : <div class="color-block" style="background-color: #c2c8ac"></div></label>
                <label class="label">Admissions without CIC : <div class="color-block" style="background-color:#a7ceef"></div></label>

            </b-col>
        </b-row>

        <b-row>
            <b-col cols="12">
                <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="fields" :sort-order="sortOrder" data-path="data" :per-page="5" pagination-path="" @vuetable:pagination-data="onPaginationData">
                    <div slot="custom-actions">
                       <b-button variant="warning" size="sm">action</b-button>
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
import AdmissionApprovalDef from "./DefFile/AdmissionApprovalDef.js";

export default {
    components: {
        Vuetable,
    },
    data() {
        return {
            fields: AdmissionApprovalDef,
        };
    },
}
</script>

<style scoped>
.color-block {
    margin-left: 2px;
    margin-right: 2px;
    margin-top: 5px;
    float: right;
    min-height: 12px;
    min-width: 12px;
    max-height: 12px;
    max-width: 12px;
}
</style>
