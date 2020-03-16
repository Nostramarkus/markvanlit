<template>
  <div>
    <div class="parallax-container-my-work">
      <client-only>
        <parallax :speed-factor="0.3" direction="down">
          <div class="h-100 text-center parralax-home-top">
            <u-animate-container>
              <u-animate name="fadeInDown" duration="1s" :offset="0">
                <img src="@/assets/img/mark-van-lit.jpg" class="logo-img z-depth-2">
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
          <nuxt-link to="/#projects" class="mark-terug mt-3">
            <i class="fas fa-chevron-left"></i>&nbsp;Back
          </nuxt-link>
          <u-animate-container>
            <u-animate name="fadeIn" duration="2s">
              <h2 class="text-uppercase text-center font-weight-bold mb-4 pt-5">This website</h2>
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
                    <h4 class="text-center text-uppercase mb-3">A personal challenge</h4>
                  </div>
                  <p class="grey-text mb-3" align="justify">
                    This website has been deployed as a static website that hydrates into a Single Page Application (SPA)
                    when a user lands on a page. Smart code prefetching is done to keep the load balance to a minimum and the
                    user experience to a maximum. I've used
                    <a
                      href="https://nuxtjs.org/"
                      target="_blank"
                      class="link grey-text"
                    >Nuxt&nbsp;js</a> to create this website. Was this really necessary for a website like this one? Maybe not. Is this awesome? For sure!
                    I've challenged myself to create this website in one weekend from scratch... That turned out be be a week, but never the less
                    i'm happy with the result. Feel free to look into my code of this website in my Github repository.
                  </p>
                  <b-button
                    @click="openUrlNewTab('https://github.com/Nostramarkus/markvanlit/')"
                    icon-left="github-circle"
                  >View on github</b-button>
                </div>
              </div>
              <div>
                <nuxt-link to="/dancenter" class="mark-other-project">
                  <i class="fas fa-chevron-left"></i>&nbsp;Prev.
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
          image: require("@/assets/img/work-this-website-01.jpg")
        },
        {
          image: require("@/assets/img/work-this-website-02.jpg")
        },
        {
          image: require("@/assets/img/work-this-website-03.jpg")
        },
        {
          image: require("@/assets/img/work-this-website-04.jpg")
        },
        {
          image: require("@/assets/img/work-this-website-05.jpg")
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
    },
    openUrlNewTab(url) {
      var win = window.open(url, "_blank");
      win.focus();
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