<template>
<div>
    <b-row>
        <b-col lg="3">
            <div class="form-group">
                    <label class="form-control-label">Health Guard</label>
                    <b-input type="text" disabled placeholder="YES">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Cashless Facility</label>
                    <b-input type="text" disabled placeholder="NO">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="3">
              <div class="form-group">
                    <label class="form-control-label">Customer Status</label>
                    <b-input type="text" disabled placeholder="Active">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="3">
             <div class="form-group">
                    <label class="form-control-label">Schema Type</label>
                    <b-input type="text" disabled placeholder="INSURED">
                    </b-input>
                </div>
        </b-col>
    </b-row>
    <b-row>
        <b-col lg="3">
             <div class="form-group">
                    <label class="form-control-label">Card Printed Date</label>
                    <b-input type="date" disabled placeholder="2021/03/01">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="3">
             <div class="form-group">
                    <label class="form-control-label">VIP</label>
                    <b-input type="text" disabled placeholder="YES">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="3">
             <div class="form-group">
                    <label class="form-control-label">VAT Pays for the Claim</label>
                    <b-input type="text" disabled placeholder="YES">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="3">
              <div class="form-group">
                    <label class="form-control-label">If 'YES' VAT Amount</label>
                    <b-input type="text" disabled placeholder="100000 LKR">
                    </b-input>
                </div>
        </b-col>
    </b-row>

    <b-row>
        <b-col lg="3">
             <div class="form-group">
                    <label class="form-control-label">Premium Outstanding Amount</label>
                    <b-input type="text" disabled placeholder="100000 LKR">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="3">
              <div class="form-group">
                    <label class="form-control-label">Percentage from the last Endorsement</label>
                    <b-input type="text" disabled placeholder="20%">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="3">
              <div class="form-group">
                    <label class="form-control-label">CIC Floating Amount</label>
                    <b-input type="text" disabled placeholder="2000 LKR">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="3">
              <div class="form-group">
                    <label class="form-control-label">CIC Floating Event Limit</label>
                    <b-input type="text" disabled placeholder="100000 LKR">
                    </b-input>
                </div>
        </b-col>
    </b-row>
    <hr>
    <b-row>
        <b-col lg="12">
            <h6 class="heading-small text-muted mb-4">Summary of the Risk Type</h6>

            <div class="accordion" role="tablist">
                <div no-body>
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button class="text-left" block v-b-toggle.accordion-1 variant="warning">W A A Weerathunga</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="fields" :sort-order="sortOrder" data-path="data" :per-page="2" pagination-path="" @vuetable:pagination-data="onPaginationData">
                            </vuetable>
                        </b-card-body>
                    </b-collapse>
                </div>
            </div>
        </b-col>
    </b-row>

    <hr>

    <b-row>
        <b-col lg="12">
            <h6 class="heading-small text-muted mb-4">Policy Level Excess</h6>
            <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="policyfields" :sort-order="sortOrder" data-path="data" :per-page="1" pagination-path="" @vuetable:pagination-data="onPaginationData">
            </vuetable>
        </b-col>
    </b-row>
    <hr>
    <b-row>
        <b-col lg="12">
            <h6 class="heading-small text-muted mb-4">Ailment Level Excess</h6>
            <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="ailmentields" :sort-order="sortOrder" data-path="data" :per-page="1" pagination-path="" @vuetable:pagination-data="onPaginationData">
            </vuetable>
        </b-col>
    </b-row>
    <hr>

    <b-row class="pt-2">
        <b-col lg="4">
              <div class="form-group">
                    <label class="form-control-label">Sales Person</label>
                    <b-input type="text" disabled placeholder="Kasun Malinga">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="4">
             <div class="form-group">
                    <label class="form-control-label">Sales Person Contact</label>
                    <b-input type="text" disabled placeholder="0764950654">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="4">
              <div class="form-group">
                    <label class="form-control-label">Underwriter</label>
                    <b-input type="text" disabled placeholder="fgdmin">
                    </b-input>
                </div>
        </b-col>
    </b-row>
    <b-row>
        <b-col lg="4">
             <div class="form-group">
                    <label class="form-control-label">Remarks by Underwriter</label>
                    <b-input type="text" disabled placeholder="ddsscsc">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="4">
             <div class="form-group">
                    <label class="form-control-label">Broker</label>
                    <b-input type="text" disabled placeholder="AG302022">
                    </b-input>
                </div>
        </b-col>
        <b-col lg="4">

        </b-col>

    </b-row>

    <b-row>
        <b-col lg="12">
            <div class="float-right pb-2">
                <b-button variant="primary" v-b-modal.modal-2>Send Email</b-button>
                <b-button variant="success" v-b-modal.modal-3>Policy Wording</b-button>
                <b-button variant="info" v-b-modal.modal-1>More Details</b-button>
            </div>
        </b-col>
    </b-row>

    <!-- More details Model Start -->
    <div>
        <b-modal id="modal-1" size="xl" title="Policy Limit Breakdown">
            <b-row>
                <b-col lg="4">
                      <div class="form-group">
                    <label class="form-control-label">Policy Number</label>
                    <b-input type="text" disabled placeholder="Yes">
                    </b-input>
                </div>
                </b-col>
                <b-col lg="4">
                      <div class="form-group">
                    <label class="form-control-label">Card Number</label>
                    <b-input type="text" disabled placeholder="NO">
                    </b-input>
                </div>
                </b-col>
                <b-col lg="4">
                       <div class="form-group">
                    <label class="form-control-label">Scheme Type</label>
                    <b-input type="text" disabled placeholder="Active">
                    </b-input>
                </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="6">
                      <div class="form-group">
                    <label class="form-control-label">Member Name</label>
                    <b-input type="text" disabled placeholder="Yes">
                    </b-input>
                </div>
                </b-col>
                <b-col lg="6">
                      <div class="form-group">
                    <label class="form-control-label">Company Name</label>
                    <b-input type="text" disabled placeholder="NO">
                    </b-input>
                </div>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col lg="12">
                    <h6 class="heading-small text-muted mb-4">Limit Breakdown</h6>
                    <div class="accordion" role="tablist">
                        <div no-body>
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button class="text-left" block v-b-toggle.accordion-2 variant="warning">W A A Weerathunga</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-2" accordion="my-accordion2" role="tabpanel">
                                <b-card-body>
                                    <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="fields" :sort-order="sortOrder" data-path="data" :per-page="2" pagination-path="" @vuetable:pagination-data="onPaginationData">
                                    </vuetable>
                                </b-card-body>
                            </b-collapse>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-modal>
    </div>
    <!-- More details Model End -->
    <!-- Send Mail Model Start -->
    <b-modal id="modal-2" size="lg" hide-footer>
        <template #modal-title>
            Send Email
        </template>
        <div class="d-block ">
            <b-row>
                <b-col lg="12">
                    <div class="form-group">
                        <label class="form-control-label">Select Underwriter</label>
                        <b-form-select type="text" label="Select Underwriter" placeholder="Select Underwriter" v-model="selected" :options="options">
                        </b-form-select>
                    </div>
                </b-col>
                <b-col lg="12">
                    <div class="form-group">
                        <label class="form-control-label">Email</label>
                        <b-input type="email" placeholder="Enter Email Address">
                        </b-input>
                    </div>
                </b-col>
                <b-col lg="12">
                    <div class="form-group">
                        <label class="form-control-label">Subject</label>
                        <b-input type="email" placeholder="Add Your Subject">
                        </b-input>
                    </div>
                </b-col>

                <b-col lg="12">
                    <div class="form-group">
                        <label class="form-control-label">Message</label>
                        <b-textarea type="text" rows="6" placeholder="Type Your Message">
                        </b-textarea>
                    </div>
                </b-col>
            </b-row>
        </div>
        <div class="mt-3 float-right">
            <b-button @click="$bvModal.hide('modal-2')">Cancel</b-button>
            <b-button variant="primary">Send Now</b-button>

        </div>
    </b-modal>
    <!-- Send Mail Model End -->
    <!-- Policy Wording Model Start -->
    <b-modal id="modal-3" size="lg" title="Policy Wording">
        <div class="form">
            <b-badge class="form-group" variant="warning" show>
                <h5>The passage is attributed to an unknown typesetter in the 15th century.</h5>
            </b-badge>
            <b-badge class="form-group" variant="warning" show>
                <h5>The passage is attributed to an unknown typesetter in the 15th century.</h5>
            </b-badge>
            <b-badge class="form-group" variant="warning" show>
                <h5>The passage is attributed to an unknown typesetter in the 15th century.</h5>
            </b-badge>
        </div>
    </b-modal>

    <!-- Policy Wording Model End -->

</div>
</template>

<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import FieldsDef from "./FieldsDef.js";
import PolicyLevelDef from "./PolicyLevelDef.js";
import AilmentLevelDef from "./AilmentLevelDef.js";

export default {
    components: {
        Vuetable,
    },

    data() {
        return {
            fields: FieldsDef,
            policyfields: PolicyLevelDef,
            ailmentields: AilmentLevelDef
        };
    },

}
</script>

<style>

</style>
