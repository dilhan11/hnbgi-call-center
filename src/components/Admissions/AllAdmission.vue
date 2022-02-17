<template>
<div>
    <b-card>
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0">All Admissions</h3>
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
                    <b-input type="date"  placeholder="">
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
                <h3 class="mb-0"> All Admissions
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
                        <b-dropdown id="dropdown-dropup" text="Action" size="sm" variant="warning" class="m-2">
                            <b-dropdown-item v-b-modal.modal-2>
                                <i class="ni ni-single-02"></i>
                                <span>Assign</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                <i class="ni ni-caps-small"></i>
                                <span>Edit</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                <i class="ni ni-send"></i>
                                <span>Resend SMS</span>
                            </b-dropdown-item>
                            <b-dropdown-item to="/viewadmission">
                                <i class="ni ni-folder-17"></i>
                                <span>View</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
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

    <!-- Assign Model Start -->
    <b-modal id="modal-2" size="xl" hide-footer>
        <template #modal-title>
            <h3>Assign CCO/MPM For <b-badge class="p-2" variant="primary"><b>CC00110545</b></b-badge>
            </h3>
        </template>
        <div class="d-block ">
            <b-row>
                <b-col lg="3">
                    <label class="form-control-label">CC Ref. No</label>
                    <p>CC00110545</p>
                </b-col>
                <b-col lg="3">
                    <label class="form-control-label">Policy Number</label>
                    <p>CRAHE04610 </p>
                </b-col>
                <b-col lg="3">
                    <label class="form-control-label">Card Number</label>
                    <p>00720162161</p>
                </b-col>
                <b-col lg="3">
                    <label class="form-control-label">Company</label>
                    <p>SIEERA CONSTRUCTION LTD </p>
                </b-col>
            </b-row>

            <b-row class="pt-4">
                <b-col lg="3">
                    <label class="form-control-label">Claimant's Name </label>
                    <p>MRS A A N AMARATHUNGA </p>
                </b-col>
                <b-col lg="3">
                    <label class="form-control-label">Hospital</label>
                    <p>ASIRI HOSPITAL HOLDINGS PLC (ASIRI GROUP) </p>
                </b-col>
                <b-col lg="3">
                    <label class="form-control-label">Ailment</label>
                    <p>BACTERIAL FEVER, TYPHOID FEVER </p>
                </b-col>
                <b-col lg="3">
                    <label class="form-control-label">CCO/MPM</label>
                    <p>N/A</p>
                </b-col>
            </b-row>

            <hr>

            <b-row>
                <b-col lg="4">
                    <div class="form-group">
                        <label class="form-control-label">
                            Select CCO/MPM</label>
                        <b-form-select type="text"  placeholder="Username" v-model="selected" :options="options">
                        </b-form-select>
                    </div>
                </b-col>
                <b-col lg="4">
                    <div class=" form-group">
                        <label class="form-control-label">
                            Allocated Person </label>
                        <div class="d-flex pt-3">
                            <b-form-radio id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
                                Mr. Kasun Perera
                            </b-form-radio>
                            <b-form-radio class="ml-5" id="checkbox-2" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
                                Other
                            </b-form-radio>
                        </div>
                    </div>
                </b-col>
                <b-col lg="4">
                    <div class="form-group">
                        <label class="form-control-label">
                            Other</label>
                        <b-form-select type="text"  placeholder="Username" v-model="selected" :options="options">
                        </b-form-select>
                    </div>
                </b-col>

            </b-row>

        </div>
        <div class="mt-3 float-right">
            <b-button @click="$bvModal.hide('modal-2')">Cancel</b-button>
            <b-button variant="primary">Assign</b-button>

        </div>
    </b-modal>
    <!-- Assign Model End -->


</div>
</template>

<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import AllAdmissionDef from "./DefFile/AllAdmissionDef.js";

export default {
    components: {
        Vuetable,
    },
    data() {
        return {
            fields: AllAdmissionDef,
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
