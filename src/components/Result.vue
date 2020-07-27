<template>
  <div class="container-fluid h-100 p-0">
      <div class="row no-gutters h-100">
        <div class="col-lg-6">
          <div class="h-100 d-flex align-items-end justify-content-center p-5" :class="isUp ? 'bg-success' : 'bg-danger'">
            <div class="info-box">
              <h2 class="secondary-heading m-0">Is {{ hostname }} <br /> down ?</h2>
              <p class="my-5">
                <div v-if="isLoading" class="p-4 d-flex justify-content-center">
                  <i class="fas fa-circle-notch"></i>
                </div>
                <transition name="fade" appear v-else>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="d-flex align-items-center justify-content-center response bg-white">
                        <div v-if="isUp" class="d-flex flex-column align-items-center p-5">
                          <div class="success-response mb-5">
                            <i class="fas fa-arrow-up"></i>  
                          </div>
                          <div class="text-center">
                            <span class="text-md">Up</span><br>
                            <span class="text-sm">From a global location</span>
                          </div>
                        </div>
                        <div v-else class="d-flex flex-column align-items-center p-5">
                          <div class="danger-response mb-5">
                            <i class="fas fa-arrow-down"></i>  
                          </div>
                          <div class="text-center">
                            <span class="text-md">Down</span><br>
                            <span class="text-sm">From a global location</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="d-flex align-items-center justify-content-center response bg-white">
                        <div class="d-flex flex-column align-items-center p-5">
                          <div class="time-response mb-5">
                            <i class="far fa-clock"></i> 
                          </div>
                          <div class="text-center">
                            <span class="text-md">{{ responseTime }} ms</span><br>
                            <span class="text-sm">Fastest response time</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="h-100 d-flex align-items-end justify-content-center p-5" style="background-color: #2CA58D"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: null,
      hostname: '',
      cors: 'https://cors-anywhere.herokuapp.com/',
      responseTime: 0,
      isUp : false,
      isLoading: true
    }
  },
  mounted() {
    this.url = this.$route.query.url
    let newUrl = this.parseURL(this.$route.query.url)

    this.hostname = this.$route.query.url
    console.log(this.parseURL(this.$route.query.url));

    let time = new Date()

    let xhr = new XMLHttpRequest()
    let self = this
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        time = new Date() - time
        self.responseTime = time
        self.isUp = true
        self.isLoading = false
      } else if (this.readyState == 4 && this.status !== 200){
        time = new Date() - time
        self.responseTime = time
        self.isUp = false;
        self.isLoading = false
      }
    }

    xhr.open('HEAD', this.urlWithCors(this.$route.query.url))

    xhr.send()

  },

  methods: {
    urlWithCors(url) {
      return this.cors + url
    }
  }
}
</script>
