<template>
       <div>
    <div class="header pb-8 pt-4">
      <b-container fluid>
        <span class="mask bg-primary opacity-8"></span>
      </b-container>
    </div>

    <b-container fluid class="mt--6">
         <b-card>
        <b-row align-v="center" slot="header">
            <b-col cols="8">
                <h3 class="mb-0"> Policy Details</h3>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="3">
                <label class="form-control-label">Policy No</label>
                <p>AXN2100000009400</p>
            </b-col>
            <b-col lg="3">
                <label class="form-control-label">Card Number</label>
                <p>CC0000920000100 </p>
            </b-col>
            <b-col lg="3">
                <label class="form-control-label">EPF No</label>
                <p>EPF784F</p>
            </b-col>
            <b-col lg="3">
                <label class="form-control-label">Employee Name</label>
                <p>Sahan Sameera Amarasinghe </p>
            </b-col>
        </b-row>

        <b-row class="pt-4">
            <b-col lg="3">
                <label class="form-control-label">Company Name </label>
                <p>Sahan Amarasinghe</p>
            </b-col>
            <b-col lg="3">
                <label class="form-control-label">Contact No</label>
                <p>00178965243</p>
            </b-col>
            <b-col lg="3">
                <label class="form-control-label">Policy Cover Period</label>
                <p>01/02/2021 to 01/02/2022</p>
            </b-col>
            <b-col lg="3">
                <div class="pt-3">
                    <b-button variant="success">History</b-button>
                    <b-button variant="dark">Add to Blacklist</b-button>
                </div>
            </b-col>
        </b-row>
    </b-card>

    <card class="mt-3 mb-3">
       <div>
  <b-card no-body>
    <b-tabs pills card>
      <b-tab title="POLICY INFO" active>
        <PolicyInfo/>
      </b-tab>
      <b-tab title="MEMBER INFO">
          <MemberInfo/>
      </b-tab>
       <b-tab title="CLAIM INFO(FGEN)"><b-card-text>CLAIM INFO(FGEN)</b-card-text></b-tab>
        <b-tab title="CLAIM INFO(CC)"><b-card-text>CLAIM INFO(CC)</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
    </card>
    </b-container>
  </div>
</template>


<script>
import PolicyInfo from '@/components/PolicyManagement/PolicyInfo.vue';
import MemberInfo from '@/components/MemberInformation/MemberInformation.vue';
export default {
components: {
      PolicyInfo,
      MemberInfo,
    
    },
}
</script>

<style scoped>
</style>
