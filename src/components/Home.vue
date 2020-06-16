<template>
  <div id="home">
    <div class="container-fluid h-100 p-0">
      <div class="row no-gutters h-100">
        <div class="col-lg-6">
          <div class="bg-light h-100 d-flex align-items-end justify-content-center">
            <div class="info-box">
              <h1 class="my-0 main-heading">Is it <br> down ?</h1>
              <p class="my-5">Ping your website form 5 global locations<br> and get to know is it down instantly</p>
              <div class="position-relative d-flex align-items-center input-box">
                <input type="url" placeholder="Enter domain" class="form-control">
                <router-link to="/result" tag="button" class="pointer btn check-btn">
                  <img src="src/assets/icons/arrow_icon.svg" alt="arrow">
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="bg-white"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
