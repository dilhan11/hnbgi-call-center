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
                    <b-input type="text" placeholder="Enter CC Ref. Number">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Policy Number</label>
                    <b-input type="text" placeholder="Enter Policy Number">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Card Number</label>
                    <b-input type="text" placeholder="Enter Card Number">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Admission Date</label>
                    <b-input type="date" placeholder="Enter Policy Number">
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
                    <b-input type="text" placeholder="Enter Policy Number">
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
                <h3 class="mb-0">All Discharges
                </h3>
            </b-col>
        </b-row>

        <b-row class="pb-3">
            <b-col>
                <label class="label pr-4">Unmapped Special Admissions : <div class="color-block" style="background-color:#efa7a7"></div></label>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="12">
                <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="fields" :sort-order="sortOrder" data-path="data" :per-page="5" pagination-path="" @vuetable:pagination-data="onPaginationData">
                    <div slot="custom-actions">
                        <b-dropdown id="dropdown-dropup" text="Action" size="sm" variant="warning" class="m-2">
                            <b-dropdown-item to="/viewadmission">
                                <i class="ni ni-folder-17"></i>
                                <span>View</span>
                            </b-dropdown-item>
                            <b-dropdown-item v-b-modal.modal-2>
                                <i class="ni ni-single-02"></i>
                                <span>Visit</span>
                            </b-dropdown-item>
                            <b-dropdown-item v-b-modal.modal-4>
                                <i class="ni ni-caps-small"></i>
                                <span>Payments</span>
                            </b-dropdown-item>
                            <b-dropdown-item v-b-modal.modal-3>
                                <i class="ni ni-send"></i>
                                <span>MPM Remarks</span>
                            </b-dropdown-item>

                            <b-dropdown-item >
                                <i class="ni ni-button-power text-red"></i>
                                <span class="text-red">Terminate</span>
                            </b-dropdown-item>
                        </b-dropdown>
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

    <!-- Visit Model Start -->
    <b-modal id="modal-2" size="lg" hide-footer>
        <template #modal-title>
            <h3>Mark CCO Visit For <b-badge class="p-2" variant="primary"><b>CC00110545</b></b-badge>
            </h3>
        </template>
        <div class="d-block ">

            <b-row>
                <b-col lg="6">
                    <div class="form-group">
                        <label class="form-control-label">
                            Visit Date</label>
                        <b-input type="date"  placeholder="Username">
                        </b-input>
                    </div>
                </b-col>

                <b-col lg="6">
                    <div class="form-group">
                        <label class="form-control-label">
                            Visit Time</label>
                        <b-input type="time"  placeholder="Username">
                        </b-input>
                    </div>
                </b-col>

            </b-row>

            <b-row>
                <b-col lg="12">
                    <div class="form-group">
                        <label class="form-control-label">
                            Remark</label>
                        <b-textarea type="text" rows="6" placeholder="Enter your Remark">
                        </b-textarea>
                    </div>
                </b-col>
                <b-col lg="12">
                    <div class=" form-group">
                        <label class="form-control-label">
                            File Upload </label>
                        <b-form-file v-model="file1" :state="Boolean(file1)" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."></b-form-file>
                    </div>
                </b-col>

            </b-row>

        </div>
        <div class="mt-3 float-right">
            <b-button @click="$bvModal.hide('modal-2')">Cancel</b-button>
            <b-button variant="primary">Save</b-button>

        </div>
    </b-modal>
    <!-- Visit Model End -->

     <!-- MPM Remark Model Start -->
    <b-modal id="modal-3" size="lg" hide-footer>
        <template #modal-title>
            <h3>MPM Remarks For <b-badge class="p-2" variant="primary"><b>CC00110545</b></b-badge>
            </h3>
        </template>
        <div class="d-block ">

            <b-row>
                <b-col lg="6">
                    <div class="form-group">
                        <label class="form-control-label">
                            Visit Date</label>
                        <b-input type="date"  placeholder="Username">
                        </b-input>
                    </div>
                </b-col>

                <b-col lg="6">
                    <div class="form-group">
                        <label class="form-control-label">
                            Visit Time</label>
                        <b-input type="time"  placeholder="Username">
                        </b-input>
                    </div>
                </b-col>

            </b-row>

            <b-row>
                <b-col lg="12">
                    <div class="form-group">
                        <label class="form-control-label">
                            Remark</label>
                        <b-textarea type="text" rows="6" placeholder="Enter your Remark">
                        </b-textarea>
                    </div>
                </b-col>
                <b-col lg="12">
                    <div class=" form-group">
                        <label class="form-control-label">
                            File Upload </label>
                        <b-form-file v-model="file1" :state="Boolean(file1)" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."></b-form-file>
                    </div>
                </b-col>

            </b-row>

        </div>
        <div class="mt-3 float-right">
            <b-button @click="$bvModal.hide('modal-3')">Cancel</b-button>
            <b-button variant="primary">Save</b-button>

        </div>
    </b-modal>
    <!-- MPM Remark Model End -->

       <!--Payment Model Start -->
    <b-modal id="modal-4" size="md" hide-footer>
        <template #modal-title>
            <h3>Enter BHT For <b-badge class="p-2" variant="primary"><b>CC00110545</b></b-badge>
            </h3>
        </template>
        <div class="d-block ">

            <b-row>
                <b-col lg="12">
                    <div class="form-group">
                        <label class="form-control-label">
                            Enter BHT</label>
                        <b-input type="text"  placeholder="Enter BHT">
                        </b-input>
                    </div>
                </b-col>

            </b-row>

        </div>
        <div class="mt-3 float-right">
            <b-button @click="$bvModal.hide('modal-4')">Cancel</b-button>
            <b-button variant="success">Save</b-button>
              <b-button variant="primary">Save & Continue</b-button>


        </div>
    </b-modal>
    <!-- Payment Model End -->

</div>
</template>

<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import AllDischargesDef from "./AllDischargesDef.js";

export default {
    components: {
        Vuetable,
    },
    data() {
        return {
            fields: AllDischargesDef,
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
