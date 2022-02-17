<template>
<div>
    <b-card>
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0">Company Notification </h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">ID</label>
                    <b-input type="text" placeholder="Enter ID">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Company Name</label>
                    <b-input type="text" placeholder="Enter Name">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Policy Number</label>
                    <b-input type="text" placeholder="Enter Category">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Notify Status</label>
                    <b-form-select type="text" v-model="selected" :options="options">
                    </b-form-select>
                </div>
            </b-col>
        </b-row>

        <b-row>

            <b-col lg="12">
                <div class=" float-right mt-1">
                    <b-button variant="success" v-b-modal.modal-1>Create New</b-button>
                    <b-button variant="primary">Search</b-button>
                    <b-button variant="">Clear</b-button>
                </div>
            </b-col>
        </b-row>
    </b-card>

    <card class="mt-3 mb-3">
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0">All Notification
                </h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="fields" :sort-order="sortOrder" data-path="data" :per-page="5" pagination-path="" @vuetable:pagination-data="onPaginationData">

                    <div slot="custom-notify">
                        <b-badge variant="success" size="sm">Yes</b-badge>
                    </div>

                    <div slot="custom-actions">
                        <b-button variant="warning" size="sm" v-b-modal.modal-1>Edit</b-button>
                    </div>
                </vuetable>

                <b-card-footer class="py-4 d-flex justify-content-end">
                    <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
                </b-card-footer>
            </b-col>
        </b-row>
    </card>

    <!--Create/Edit Company Notification Model Start -->
    <b-modal id="modal-1" size="md" hide-footer>
        <template #modal-title>
            <h3>Create Company Notification
            </h3>
        </template>
        <div class="d-block ">

            <b-row>
                <b-col lg="12">
                    <div class="form-group">
                        <label class="form-control-label">
                            Company Name</label>
                        <b-input type="text" placeholder="Enter Company Name">
                        </b-input>
                    </div>
                </b-col>
                <b-col lg="12">
                    <div class="form-group">
                        <label class="form-control-label">
                            Policy Number</label>
                        <b-input type="text" placeholder="Enter Policy Number">
                        </b-input>
                    </div>
                </b-col>

                <b-col lg="12">
                    <div class="form-group">
                        <label class="form-control-label">
                            Phone Number</label>
                        <b-form-group  description="Format : XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX">
                            <b-form-input type="tel" placeholder="Enter Phone number"></b-form-input>
                        </b-form-group>
                    </div>
                </b-col>
                 <b-col lg="12">
                    <div class="form-group">
                        <label class="form-control-label">
                            Email Address</label>
                       <b-form-group  description="Format : example1@yahoo.com,example2@yahoo.com,example3@yahoo.com">
                            <b-form-input type="tel" placeholder="Enter Email Address"></b-form-input>
                        </b-form-group>
                    </div>
                </b-col>
                   <b-col lg="12">
                    <div class="form-group">
                        <label class="form-control-label">
                            Notify</label>
                        <div class="d-flex">
                            <div> No</div>
                            <div class="ml-4">
                                <b-form-checkbox switch size="lg"></b-form-checkbox>
                            </div>
                            <div> Yes</div>
                        </div>

                    </div>
                </b-col>

            </b-row>

        </div>
        <div class="mt-3 float-right">
            <b-button @click="$bvModal.hide('modal-1')">Cancel</b-button>
            <b-button variant="primary">Create</b-button>

        </div>
    </b-modal>
    <!--Create/Edit Company Notification Model End -->

</div>
</template>

<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import CompanyNotification from "./CompanyNotificationDef.js";

export default {
    components: {
        Vuetable,
    },
    data() {
        return {
            fields: CompanyNotification,
        };
    },
}
</script>

<style scoped>

</style>
