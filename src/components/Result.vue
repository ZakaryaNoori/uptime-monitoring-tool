<template>
  <div class="container-fluid h-100 p-0">
      <div class="row no-gutters h-100">
        <div class="col-lg-6">
          <div class="bg-danger h-100 d-flex align-items-center justify-content-center">
            <div class="info-box">
              <h2>Is {{ url }} <br /> down ?
              </h2>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: null
    }
  },
  mounted() {
    this.url = this.$route.query.url
    this.parseURL(this.$route.query.url)
  }
}
</script>

<style>

</style>