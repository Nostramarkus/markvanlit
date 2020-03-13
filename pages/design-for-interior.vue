<template>
  <div>
    <div class="parallax-container-my-work">
      <client-only>
        <parallax :speed-factor="0.3" direction="down">
          <div class="h-100 text-center parralax-home-top">
            <u-animate-container>
              <u-animate name="fadeInDown" duration="1s" :offset="0">
                <img src="@/assets/img/design-for-interior.svg" class="logo-img z-depth-2">
              </u-animate>
            </u-animate-container>
          </div>
        </parallax>
      </client-only>
    </div>
    <div class="mark-diagonaal-wrapper mark-diagonaal-wrapper-top">
      <img src="@/assets/img/mark-diagonaal.svg" class="mark-diagonaal">
    </div>

    <div class="mark-content">
      <div class="container">
        <section class="section mb-5 pt-0">
          <nuxt-link to="/" class="mark-terug mt-2">
            <i class="fas fa-chevron-left"></i>&nbsp;Back
          </nuxt-link>
          <u-animate-container>
            <u-animate name="fadeIn" duration="2s">
              <h2 class="text-uppercase text-center font-weight-bold mb-4 pt-5">Design For Interior</h2>
            </u-animate>
            <u-animate name="fadeIn" duration="2s">
              <hr>
              <div class="row pt-3 pt-md-5 mb-5">
                <div class="col-lg-6 order-lg-2 offset-lg-1 col-md-12 mb-5">
                  <div
                    class="row text-center mark-work-carousel"
                    :class="{'mark-carousel-overflow' : !gallery}"
                  >
                    <b-carousel
                      :autoplay="false"
                      indicator-custom
                      :indicator-inside="false"
                      :overlay="gallery"
                      animated="fade"
                    >
                      <b-carousel-item v-for="(item, i) in items" :key="i">
                        <a @click="switchGallery(true)" class="image mark-work-image mb-3">
                          <img :src="item.image" alt="Design For Interior">
                        </a>
                      </b-carousel-item>
                      <span
                        v-if="gallery"
                        @click="switchGallery(false)"
                        class="modal-close is-large"
                      />
                      <template
                        slot="indicators"
                        slot-scope="props"
                        icon-size="large"
                        @click="switchGallery(false)"
                      >
                        <figure class="al image" :class="{'d-none':gallery}" :draggable="false">
                          <img
                            :draggable="false"
                            :src="getImgUrl(props.i)"
                            alt="Design For Interior"
                          >
                        </figure>
                      </template>
                    </b-carousel>
                  </div>
                </div>
                <div class="col-lg-5 col-md-12 mb-5">
                  <div class="d-flex justify-content-start">
                    <h4 class="text-center text-uppercase mb-3">Brand creation</h4>
                  </div>
                  <p class="grey-text mb-3" align="justify">
                    Design For Interior is a online marketplace focussed on interior design items. I've created this
                    brand from scratch including logo, company visual styleguide and more. The site has a cool feature where
                    buyers can start a live chat with the sellers. Feel free to visit the site and maybe you will find a
                    nice item that you can buy or create an account and sell your items.
                  </p>
                  <b-button
                    tag="a"
                    href="https://designforinterior.com/"
                    target="_blank"
                    icon-left="earth"
                  >Visit website</b-button>

                  <hr class="mt-5">
                  <div class="d-flex justify-content-start mt-5">
                    <h4 class="text-center text-uppercase mb-3">Vue + Nuxt version</h4>
                  </div>
                  <p
                    class="grey-text mb-3"
                    align="justify"
                  >For demo purposes i recreated the website with Vue.js and Nuxt.js. This provides Server Side Rendering (SSR) techniques and great SEO control</p>
                  <b-button
                    tag="a"
                    href="http://vanlitmedia.nl/dfi-ssr/"
                    target="_blank"
                    icon-left="vuejs"
                    class="mb-3 mb-sm-0"
                  >Vue + Nuxt version</b-button>
                  <b-button
                    tag="a"
                    href="https://github.com/Nostramarkus/dfi-ssr"
                    target="_blank"
                    icon-left="github-circle"
                  >View on github</b-button>

                  <hr class="mt-5">
                  <div class="d-flex justify-content-start mt-5">
                    <h4 class="text-center text-uppercase mb-3">React version</h4>
                  </div>
                  <p
                    class="grey-text mb-3"
                    align="justify"
                  >For demo purposes i recreated the website with React.js. The project is deployed as a Single Page Application (SPA)</p>
                  <b-button
                    tag="a"
                    href="http://vanlitmedia.nl/dfi-react/"
                    target="_blank"
                    icon-left="react"
                    class="mb-3 mb-sm-0"
                  >React version</b-button>
                  <b-button
                    tag="a"
                    href="https://github.com/Nostramarkus/dfi-react"
                    target="_blank"
                    icon-left="github-circle"
                  >View on github</b-button>
                </div>
              </div>

              <div>
                <nuxt-link to="/belvilla" class="mark-other-project">
                  <i class="fas fa-chevron-left"></i>&nbsp;Prev.
                </nuxt-link>
                <nuxt-link to="/wicked-oneliners" class="mark-other-project float-right">
                  Next
                  <i class="fas fa-chevron-right"></i>
                </nuxt-link>
              </div>
            </u-animate>
          </u-animate-container>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";
export default {
  name: "home",
  components: {
    Parallax
  },
  data() {
    return {
      gallery: false,
      items: [
        {
          image: require("@/assets/img/work-design-for-interior-01.jpg")
        },
        {
          image: require("@/assets/img/work-design-for-interior-02.jpg")
        },
        {
          image: require("@/assets/img/work-design-for-interior-03.jpg")
        },
        {
          image: require("@/assets/img/work-design-for-interior-04.jpg")
        },
        {
          image: require("@/assets/img/work-design-for-interior-05.jpg")
        }
      ]
    };
  },
  methods: {
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        return document.documentElement.classList.add("is-clipped");
      } else {
        return document.documentElement.classList.remove("is-clipped");
      }
    },
    getImgUrl(value) {
      return this.items[value].image;
    }
  }
};
</script>

<style>
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
</style>