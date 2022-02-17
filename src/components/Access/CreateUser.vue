<template>
<div>
    <b-card>
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0">Create User</h3>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">EPF No</label>
                    <b-input type="text" placeholder="Enter EPF No">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">First Name</label>
                    <b-input type="text" placeholder="Enter First Name">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Last Name</label>
                    <b-input type="text" placeholder="Enter Last Name">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Contact No</label>
                    <b-input type="text" placeholder="Enter EPF No">
                    </b-input>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">E-mail Address</label>
                    <b-input type="text" placeholder="Enter First Name">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">Last Name</label>
                    <b-input type="text" placeholder="Enter Last Name">
                    </b-input>
                </div>
            </b-col>
            <b-col lg="3">
                <div class="form-group">
                    <label class="form-control-label">
                        Active</label>
                    <div class="d-flex pt-2">
                        <div> No</div>
                        <div class="ml-4">
                            <b-form-checkbox switch size="lg"></b-form-checkbox>
                        </div>
                        <div> Yes</div>
                    </div>

                </div>
            </b-col>
        </b-row>
        <hr>
        <b-row>
            <b-col lg="12">
                <b-row align-v="center" slot="header">
                    <b-col cols="8">
                        <h3 class="mb-0">
                            Assign Roles</h3>
                    </b-col>
                </b-row>
                <div class="form-group row">

                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-8">Administrator</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-4">Approvers</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-14">Back Office User</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-5">Call Center Agents</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-6">Call Center Supervisors</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-2">Cco</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-10">Cco123mnj</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-11">Ghfhgf</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-13">Help Desk User</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-3">Medical Panel</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-9">Nipuni</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-12">Reassign_user</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-1">Super Administrator</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="CustomCard hoverCustomCard">
                            <div class="CustomCardheader text-white btn-info">
                                <label class="label-font role-name" for="role-7">Under Writers</label>
                            </div>
                            <div class="avatar">
                                <img alt="Image placeholder" src="img/theme/team-4.jpg"> </div>
                            <div>
                                <div class="toggle-margin-t">
                                    <div class="form-group">
                                        <div class="d-flex pl-3 pt-2">
                                            <div> No</div>
                                            <div class="ml-4">
                                                <b-form-checkbox class="" switch size="lg"></b-form-checkbox>
                                            </div>
                                            <div> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>

            <b-col lg="12">
                <div class=" float-right mt-1">
                    <b-button variant="primary">Create</b-button>
                    <b-button variant="">Cancel</b-button>
                </div>
            </b-col>
        </b-row>

    </b-card>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.CustomCard {
    padding-top: 20px;
    margin: 10px 0 20px 0;
    background-color: rgba(214, 224, 226, 0.2);
    border-top-width: 0;
    border-bottom-width: 2px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 15px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.CustomCard.hoverCustomCard {
    position: relative;
    padding-top: 0;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
}

.CustomCard.hoverCustomCard .CustomCardheader {
    background-size: cover;
    padding-top: 10px;
    height: 85px;
}

.btn-info {
    color: #fff;
    background-color: #308ee0 !important;
    border-color: #20a8d800 !important;
}

/* .avatar {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 36px;
} */
.CustomCard.hoverCustomCard .avatar {
    position: relative;
    top: -30px;
    margin-bottom: -50px;
    margin-right: 0px;
}

.CustomCard.hoverCustomCard .avatar img {
    width: 80px;
    height: 80px;
    max-width: 100px;
    max-height: 100px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.5);
}

.toggle-margin-t {
    margin-top: -20px;
}
</style>
