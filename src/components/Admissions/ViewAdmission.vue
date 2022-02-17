<template>
<div>
    <b-card>
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0">View Admission</h3>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="4">
                 <div class="form-group">
                    <label class="form-control-label">CC Ref. Number</label>
                    <b-input type="text" disabled placeholder="CC00110545">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="4">
                 <div class="form-group">
                    <label class="form-control-label">CC Agent</label>
                    <b-input type="text" disabled placeholder="Jithya Pallemulla">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="4">
                 <div class="form-group">
                    <label class="form-control-label">Policy Number</label>
                    <b-input type="text" disabled placeholder="CRAHE04610">
                    </b-input>
                      </div>
            </b-col>

        </b-row>

        <b-row>
            <b-col lg="4">
                <div class="form-group">
                    <label class="form-control-label">Card Number</label>
                    <b-input type="text" disabled placeholder="00720162161">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="4">
                <div class="form-group">
                    <label class="form-control-label">Claimant's Name</label>
                    <b-input type="text" disabled placeholder="MRS A A N AMARATHUNGA">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="4">
                <div class="form-group">
                    <label class="form-control-label">Date of Birth</label>
                    <b-input type="text" disabled placeholder="1983-03-05">
                    </b-input>
                      </div>
            </b-col>

        </b-row>

        <b-row>
            <b-col lg="4">
                 <div class="form-group">
                    <label class="form-control-label">Contact Number</label>
                    <b-input type="text" disabled placeholder="0714572514">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="4">
                 <div class="form-group">
                    <label class="form-control-label">NIC</label>
                    <b-input type="text" disabled placeholder="930459204V">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="4">
                 <div class="form-group">
                    <label class="form-control-label">Hospital</label>
                    <b-input type="text" disabled placeholder="ASIRI HOSPITAL HOLDINGS PLC (ASIRI GROUP)">
                    </b-input>
                      </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="4">
                   <div class="form-group">
                    <label class="form-control-label">Preferred Language</label>
                    <b-input type="text" disabled placeholder="ENGLISH">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="4">
                   <div class="form-group">
                    <label class="form-control-label">Company</label>
                    <b-input type="text" disabled placeholder="SIEERA CONSTRUCTION LTD">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="4">
                   <div class="form-group">
                    <label class="form-control-label">Room Number</label>
                    <b-input type="text" disabled placeholder="NICU">
                    </b-input>
                      </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="4">
                 <div class="form-group">
                    <label class="form-control-label">Admission Date</label>
                    <b-input type="text" disabled placeholder="2020-12-06">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="4">
                 <div class="form-group">
                    <label class="form-control-label">BHT</label>
                    <b-input type="text" disabled placeholder="N/A">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="4">
                 <div class="form-group">
                    <label class="form-control-label">Ailment</label>
                    <b-input type="text" disabled placeholder="BACTERIAL FEVER, TYPHOID FEVER">
                    </b-input>
                      </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="4">
                <div class="form-group">
                    <label class="form-control-label">CIC</label>
                    <b-input type="text" disabled placeholder="NO">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="4">
                <div class="form-group">
                    <label class="form-control-label">Reserve Amount</label>
                    <b-input type="text" disabled placeholder="Rs.62,000.00">
                    </b-input>
                      </div>
            </b-col>
            <b-col lg="4">

                <label class="form-control-label">
                    Status</label>
                <b-badge variant="danger" class="d-flex  p-3">CCO/MPM PENDING
                </b-badge>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <label class="form-control-label">
                    Special Notes</label>
                <b-textarea type="text" rows="6" disabled>
                </b-textarea>
            </b-col>

            <b-col lg="6">
                <label class="form-control-label">
                    Remarks</label>
                <b-textarea type="text" rows="6" disabled>
                </b-textarea>
            </b-col>
        </b-row>

        <hr>
        <h6 class="heading-small text-muted mb-4">Admission Remarks</h6>

        <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="allremars" :sort-order="sortOrder" data-path="data" :per-page="5" pagination-path="" @vuetable:pagination-data="onPaginationData">
              <div slot="custom-stage">
                <b-badge size="sm" variant="danger">Admission</b-badge>
            </div>
           
           
            <div slot="custom-actions">
                <b-button size="sm" variant="warning">Attachment</b-button>

            </div>
        </vuetable>
        <hr>
        <b-row>
            <b-col lg="6">
                <h6 class="heading-small text-muted mb-4">All Attachments</h6>
                <b-button size="md" variant="success"> <i class="ni ni-single-copy-04 pr-2"></i>See All Attachment</b-button>
            </b-col>

            <b-col lg="6">
                <h6 class="heading-small text-muted mb-4">Client Attachments</h6>
                <b-button size="md" variant="success"> <i class="ni ni-single-copy-04 pr-2"></i> See All client Attachment</b-button>
            </b-col>
        </b-row>

        <hr>

        <h6 class="heading-small text-muted mb-4">CCO/MPM Assignments</h6>

        <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="allassignment" :sort-order="sortOrder" data-path="data" :per-page="5" pagination-path="" @vuetable:pagination-data="onPaginationData">
        </vuetable>

        <hr>

        <h6 class="heading-small text-muted mb-4">Visit Remark History(If available)</h6>

        <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="alladmitionvisit" :sort-order="sortOrder" data-path="data" :per-page="5" pagination-path="" @vuetable:pagination-data="onPaginationData">
        </vuetable>

        <hr>

        <h6 class="heading-small text-muted mb-4">Approval log</h6>

        <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="AllAdmissioVisitDef" :sort-order="sortOrder" data-path="data" :per-page="5" pagination-path="" @vuetable:pagination-data="onPaginationData">
        </vuetable>

        <b-row>
            <b-col lg="12">

                <b-button class="mt-3 float-right" variant="dark">Back</b-button>

            </b-col>
        </b-row>

    </b-card>
</div>
</template>

<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import AllAdmissionRemarkDef from "./DefFile/AllAdmissionRemarkDef.js";
import AllAdmissioAssignmentDef from "./DefFile/AllAdmissioAssignmentDef.js";
import AllAdmissioVisitDef from "./DefFile/AllAdmissioVisitDef.js";
import AllAdmissioApprovalLogDef from "./DefFile/AllAdmissioApprovalLogDef.js";
export default {
    components: {
        Vuetable,
    },
    data() {
        return {
            allremars: AllAdmissionRemarkDef,
            allassignment: AllAdmissioAssignmentDef,
            alladmitionvisit: AllAdmissioVisitDef,
            AllAdmissioVisitDef: AllAdmissioApprovalLogDef,
        };
    },
}
</script>

<style>

</style>
