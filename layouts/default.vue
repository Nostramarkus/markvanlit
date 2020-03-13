<template>
  <div>
    <b-navbar class="mark-nav font-weight-light" :class="{ 'mark-nav-top': top }" fixed-top>
      <template slot="brand">
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button
              type="is-light"
              class="mark-nav-contact-btn"
              outlined
              v-scroll-to="{
                el: '#contact',
                offset: -50
              }"
            >Contact</b-button>
          </div>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" to="/" v-scroll-to="'body'">Home</b-navbar-item>
        <b-navbar-item
          v-scroll-to="{
            el: '#aboutMe',
            offset: -50
          }"
        >About me</b-navbar-item>
        <b-navbar-item
          v-scroll-to="{
            el: '#projects',
            offset: -50
          }"
        >Work</b-navbar-item>
      </template>
    </b-navbar>
    <!-- -->
    <nuxt/>
    <!-- -->
    <footer class="page-footer text-center text-md-left mt-0">
      <div class="container mb-2">
        <div class="row">
          <div class="col-md-12 mt-4 mb-3">
            <div class="footer-socials mt-1 text-center">
              <a
                href="https://www.linkedin.com/in/mark-van-lit-33509a16/"
                target="_blank"
                type="button"
                class="btn-floating btn-secondary"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/markvanlit"
                target="_blank"
                type="button"
                class="btn-floating btn-secondary"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://github.com/Nostramarkus/"
                target="_blank"
                class="btn-floating btn-secondary"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright py-3 text-center">
        <div class="container-fluid">
          © Design and development by
          <a
            href="https://www.linkedin.com/in/mark-van-lit-33509a16/"
            target="_blank"
          >Mark&nbsp;van&nbsp;Lit</a>
        </div>
      </div>
    </footer>
    <div v-show="!top" class="mark-to-top" v-scroll-to="'body'">
      <i class="fas fa-angle-up"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: true
    };
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.onScroll);
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("scroll", this.onScroll);
    }
  },
  methods: {
    onScroll() {
      var pixels = 350;
      //window.outerWidth > 575 ? (pixels = 400) : (pixels = 200);
      window.pageYOffset > pixels ? (this.top = false) : (this.top = true);
    }
  }
};
</script>
<style>
.mark-nav {
  background-color: #222;
  padding-top: 0;
  padding-bottom: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.mark-nav-top {
  background-color: transparent;
  box-shadow: none;
  padding-top: 10px;
  padding-bottom: 10px;
}

.mark-nav .navbar-item,
.mark-nav-top .navbar-item,
.mark-nav .navbar-item:active,
.mark-nav-top .navbar-item:active,
.mark-nav .navbar-item:focus,
.mark-nav-top .navbar-item:focus {
  color: white;
  background-color: transparent;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.mark-nav .navbar-item:hover,
.mark-nav-top .navbar-item:hover {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  background-color: transparent;
}

.mark-nav-contact-btn {
  color: white;
  background-color: transparent;
  -webkit-transition: 0.35s;
  -o-transition: 0.35s;
  transition: 0.35s;
}
.mark-nav-contact-btn:focus {
  color: white !important;
  background-color: transparent !important;
  box-shadow: none !important;
}
.navbar-brand .navbar-item {
  position: absolute;
  right: 15px;
}
.navbar-burger {
  margin-left: 0;
}
.navbar-menu.is-active {
  background-color: #212121;
}

.navbar-brand .navbar-item {
  right: 0;
}

/*
.navbar-burger span {
  width: 20px;
}
.navbar-burger span:nth-child(1) {
  top: calc(50% - 6px);
}

.navbar-burger span:nth-child(2) {
  top: calc(50% - 1px);
}

.navbar-burger span:nth-child(3) {
  top: calc(50% + 4px);
}


*/
html.has-navbar-fixed-top,
body.has-navbar-fixed-top {
  padding-top: 0;
}
</style>
