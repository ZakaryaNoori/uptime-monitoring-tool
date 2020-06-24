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
                        <span v-else>Status : down</span>
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

    this.hostname = newUrl.hostname.split(".")[1]
    let time = new Date()

    let xhr = new XMLHttpRequest()
    let self = this
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        time = new Date() - time
        self.responseTime = time
        self.isUp = true
        self.isLoading = false
        console.log("%c uppppppppppppppppppppppppppppppp", 'color: blue');
        console.log("%c Response time : " + time/1000 +"s", 'color: green');
      } else if (this.readyState == 4 && this.status !== 200){
        console.log("down");
      }
    }
    xhr.open('HEAD', this.cors + this.$route.query.url)

    xhr.send()

  }
}
</script>
