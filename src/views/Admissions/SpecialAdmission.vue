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
       <SpecialAdmission/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SpecialAdmission from '@/components/Admissions/SpecialAdmission.vue';
export default {
  components: {
        SpecialAdmission
    },
}
</script>

<style scoped>

</style>
