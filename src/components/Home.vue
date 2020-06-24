<template>
  <div id="home">
    <div class="container-fluid h-100 p-0">
      <div class="row no-gutters h-100">
        <div class="col-lg-6">
          <div class="bg-light h-100 d-flex align-items-end justify-content-center">
            <div class="info-box">
              <h1 class="my-0 main-heading">Is it <br> down ?</h1>
              <p class="my-5">Ping your website form 5 global locations<br> and get to know is it down instantly</p>
              <form 
                class="position-relative d-flex align-items-center input-box" 
                @submit.prevent="checkForm"
                method="post">
                <input 
                  type="" 
                  placeholder="Enter domain eg. (https://www.example.com)" 
                  class="form-control"
                  v-model="url">
                <a class="pointer btn check-btn d-flex align-items-center px-3" @click="checkForm">
                  <i class="fas fa-arrow-right" style="color: white"></i>
                </a>
              </form>
              <small class="text-danger" v-if="errors.length > 0">
                {{ errors[0] }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="bg-white h-100">
            <div class="p-5 d-flex align-items-center justify-content-center h-100">
              <ul class="row list w-100 p-0">
                <li v-for="(url, index) in urls" :key="index" class="col-lg-4 col-md-6 col-sm-12 col-xlg-3">
                  <div class="p-5 url-item d-flex align-items-center" :style="{backgroundColor : colors[Math.round(Math.random() * 2)]}">
                    {{ url }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
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
      url: null,
      errors: [],
      isValidUrl: true,
      urls: [],
      colors: [
        '#F0F5FD',
        '#FEF0F5',
        '#E9F5FE',
      ]
    }
  },
  mounted () {
    this.urls = JSON.parse(localStorage.getItem('urls'))
  },
  methods: {
    checkForm(e) {
      this.errors = []

      if(!this.url) {
        this.errors.push('URL field cant be empty')
        return false
      } else if (!this.validUrl(this.url)) {
        this.errors.push('Valid url required.');
        return false
      }

      e.preventDefault()
      if(localStorage.getItem('urls')) {
        let urls = JSON.parse(localStorage.getItem('urls'))
        if(!urls.includes(this.url) && urls.length < 6) {
          urls.push(this.url)
          localStorage.setItem('urls', JSON.stringify(urls))
        } else if(urls.length == 6) {
          urls.shift()
          urls.push(this.url)
          localStorage.setItem('urls', JSON.stringify(urls))
        }
      } else {
        localStorage.setItem('urls', JSON.stringify([this.url]))
      }
      this.$router.push({ path: 'result', query: { url: this.url } })
      return true
    },

    /**
     * Checks if email is valid or not.
     */
    validUrl(str) {
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
    },
    getRandomColor() {
      let randOneToSix = Math.floor(Math.random() * 3) + 1
      console.log('fdsjlk');
      return this.colors[randOneToSix]
    }
  },

  watch: {
    url(value) {
      this.validUrl(value)
    }
  }
}
</script>
