<template>
<div>

    <b-row>
          <b-col lg="2">

        </b-col>
        <b-col lg="8">
  <b-card>
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0">Create New Admission</h3>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                 <div class="form-group">
                    <label class="form-control-label">Policy Number</label>
                    <b-input type="text" disabled placeholder="Enter Policy Number">
                    </b-input>
                      </div>
            </b-col>

            <b-col lg="12">
                 <div class="form-group">
                    <label class="form-control-label">Card Number</label>
                    <b-input type="text" disabled placeholder="Enter Card Number">
                    </b-input>
                      </div>
            </b-col>

            <b-col lg="12">
                 <div class="form-group">
                    <label class="form-control-label">Date of Birth</label>
                    <b-input type="date" disabled placeholder="Enter Date of Birth">
                    </b-input>
                      </div>
            </b-col>

            <b-col lg="12">
                 <div class="form-group">
                    <label class="form-control-label">Company Name</label>
                    <b-input type="text" disabled placeholder="Enter Company Name">
                    </b-input>
                      </div>
            </b-col>

            <b-col lg="12">
                 <div class="form-group">
                    <label class="form-control-label">Claimant's Name</label>
                    <b-input type="text" disabled placeholder="Enter Claimant's Name">
                    </b-input>
                      </div>
            </b-col>

            <b-col lg="12">
                  <div class="form-group">
                    <label class="form-control-label">NIC Number</label>
                    <b-input type="text" disabled placeholder="NIC Number">
                    </b-input>
                      </div>
            </b-col>

            <b-col lg="12">
                 <div class="form-group">
                    <label class="form-control-label">Contact Number</label>
                    <b-input type="text" disabled placeholder="Contact Number">
                    </b-input>
                      </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="9">
                <div class="form-group">
                    <label class="form-control-label">Ailments </label>
                    <b-form-select type="text"  placeholder="Username" v-model="selected" :options="options">
                    </b-form-select>
                </div>
            </b-col>
            <b-col lg="3">
                <b-form-checkbox class="pt-5" id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
                    <b>CIC</b>
                </b-form-checkbox>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <div class="form-group">
                    <label class="form-control-label">Preferred Language</label>
                    <b-form-select type="text"  placeholder="Username" v-model="selected" :options="options">
                    </b-form-select>
                </div>
            </b-col>

            <b-col lg="12">
                <div class="form-group">
                    <label class="form-control-label">Hospital Name</label>
                    <b-form-select type="text"  placeholder="Username" v-model="selected" :options="options">
                    </b-form-select>
                </div>
            </b-col>

            <b-col lg="12">
                 <div class="form-group">
                    <label class="form-control-label">BHT</label>
                    <b-input type="text" placeholder="Enter BHT">
                    </b-input>
                      </div>
            </b-col>

            <b-col lg="12">
                  <div class="form-group">
                    <label class="form-control-label">Admission Date</label>
                    <b-input type="date" placeholder="Enter Admission Date">
                    </b-input>
                      </div>
            </b-col>

            <b-col lg="12">
                 <div class="form-group">
                    <label class="form-control-label">Room Number</label>
                    <b-input type="text" placeholder="Enter Room Number">
                    </b-input>
                      </div>
            </b-col>

            <b-col lg="12">
                  <div class="form-group">
                    <label class="form-control-label">Reserve Amount</label>
                    <b-input type="text" placeholder="Enter Reserve Amount">
                    </b-input>
                      </div>
            </b-col>

            <b-col lg="12">
                <label class="form-control-label">Special Note</label>
                <b-textarea type="text" rows="6" placeholder="Type Special note">
                </b-textarea>
            </b-col>

            <b-col lg="12">
                <label class="form-control-label pt-4">File Upload</label>
                <b-form-file v-model="file1" :state="Boolean(file1)" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."></b-form-file>
                <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
            </b-col>

            <b-col lg="12">
                <label class="form-control-label pt-4">Remark</label>
                <b-textarea type="text" rows="6" placeholder="Type Remark">
                </b-textarea>
            </b-col>
        </b-row>

        <b-row class="mt-4">
            <b-col lg="12">
                <div class="float-right">
                   <b-button variant="">Cancel</b-button>
                    <b-button variant="primary">Create</b-button>
                   
                </div>
            </b-col>
        </b-row>

    </b-card>
        </b-col>

        <b-col lg="2">

        </b-col>
    </b-row>

  

</div>
</template>

<script>
import BaseCheckbox from '../Inputs/BaseCheckbox.vue'
export default {
    components: {
        BaseCheckbox
    },
    data() {
        return {
            file1: null,
            file2: null
        }
    }
}
</script>

<style scoped>

</style>
