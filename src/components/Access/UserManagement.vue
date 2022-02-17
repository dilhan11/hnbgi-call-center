<template>
<div>
    <b-card>
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0">User Management</h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="4">
                <div class="form-group">
                    <label class="form-control-label">EPF No</label>
                    <b-input type="text" placeholder="Enter EPF No">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="4">
                <div class="form-group">
                    <label class="form-control-label">Name</label>
                    <b-input type="text" placeholder="Enter Name">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="4">
                <div class="form-group">
                    <label class="form-control-label">Email</label>
                    <b-input type="text" placeholder="Enter Email">
                    </b-input>
                </div>
            </b-col>

        </b-row>
        <b-row>
            <b-col lg="4">
                <div class="form-group">
                    <label class="form-control-label">Contact Number</label>
                    <b-input type="text" placeholder="Enter Contact Number">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="4">
                <div class="form-group">
                    <label class="form-control-label">Role</label>
                    <b-input type="text" placeholder="Enter Role">
                    </b-input>
                </div>
            </b-col>
              <b-col lg="4">
                <div class="form-group">
                    <label class="form-control-label">Status</label>
                    <b-form-select type="text"  placeholder="Status" v-model="selected" :options="options">
                    </b-form-select>
                </div>
            </b-col>
        </b-row>

        <b-row>

            <b-col lg="12">
                <div class=" float-right mt-1">
                    <b-button variant="success" to="/createuser">Create New User</b-button>
                    <b-button variant="primary">Search</b-button>
                    <b-button variant="">Clear</b-button>
                </div>
            </b-col>
        </b-row>
    </b-card>

    <card class="mt-3 mb-3">
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0">All Users
                </h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <vuetable class="table-striped " ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="fields" :sort-order="sortOrder" data-path="data" :per-page="5" pagination-path="" @vuetable:pagination-data="onPaginationData">
                    <div slot="custom-actions">

                        <b-dropdown id="dropdown-1" variant="warning" text="Action" size="sm">
                            <b-dropdown-item>
                                <i class="ni ni-folder-17"></i>
                                <span>View</span>
                            </b-dropdown-item>
                            <b-dropdown-item to="/createuser">
                                <i class="ni ni-caps-small"></i>
                                <span>Edit</span>
                            </b-dropdown-item>
                        </b-dropdown>
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
import usermanagement from "./UserManagementDef";

export default {
    components: {
        Vuetable,
    },
    data() {
        return {
            fields: usermanagement,
        };
    },
}
</script>

<style scoped>

</style>
