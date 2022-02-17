<template>
<div>
    <b-row class="pb-8 mb-5">
        <b-col lg="7">
            <b-card>
                <b-row align-v="center" slot="header">
                    <b-col cols="8">
                        <h3 class="mb-0">Roster Management</h3>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col lg="12">
                        <b-calendar block locale="en-US"></b-calendar>
                    </b-col>
                </b-row>

            </b-card>
        </b-col>

        <b-col lg="5">
            <b-card>
                <b-row align-v="center" slot="header">
                    <b-col cols="8">
                        <h3 class="mb-0">Assign CCO to Hospital</h3>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col lg="12">
                        <div class="form-group">
                            <label class="form-control-label">Date</label>
                            <b-input type="date" placeholder="Select Date">
                            </b-input>
                        </div>
                    </b-col>

                    <b-col lg="12">
                        <div class="form-group">
                            <label class="form-control-label">CCO</label>
                            <b-form-select type="text" placeholder="Select CCO">
                            </b-form-select>
                        </div>
                    </b-col>

                   
                    <b-col lg="12">
                        <div class="form-group">
                            <label class="form-control-label">Shift</label>
                            <b-form-group >
                                <b-form-radio name="some-radios" value="A">8.30 am – 5.00 pm</b-form-radio>
                                <b-form-radio name="some-radios" value="B">5.00 pm – 8.30 am</b-form-radio>
                            </b-form-group>
                        </div>
                    </b-col>

                    <b-col lg="12">
                        <div class="form-group">
                            <label class="form-control-label">Hospital</label>
                            <b-form-select type="text" placeholder="Select Hospital">
                            </b-form-select>
                        </div>
                    </b-col>
                   
                </b-row>

                <b-row class="mt-4">
                    <b-col lg="12">
                        <div class="float-right">
                            <b-button variant="">Cancel</b-button>
                            <b-button variant="primary">Assign</b-button>

                        </div>
                    </b-col>
                </b-row>
            </b-card>
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
