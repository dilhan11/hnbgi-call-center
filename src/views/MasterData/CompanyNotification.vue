<template>
        <div>
    <div class="header pb-8 pt-4">
      <b-container fluid>
        <span class="mask bg-primary opacity-8"></span>
      </b-container>
    </div>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col md="12" class="order-xl-1">
       <CompanyNotification/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CompanyNotification from '@/components/MasterData/CompanyNotification.vue';
export default {
  components: {
        CompanyNotification
    },
}
</script>

<style scoped>

</style>
