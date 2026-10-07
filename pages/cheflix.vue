<template>
  <div>
    <div class="parallax-container-my-work">
      <client-only>
        <parallax :speed-factor="0.3" direction="down">
          <div class="h-100 text-center parralax-home-top">
            <u-animate-container>
              <u-animate name="fadeInDown" duration="1s" :offset="0">
                <img src="@/assets/img/project-cheflix.svg" class="logo-img z-depth-2">
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
              <h2 class="text-uppercase text-center font-weight-bold mb-4 pt-5">Cheflix</h2>
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
                          <img :src="item.image" alt="Cheflix">
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
                            alt="Cheflix"
                          >
                        </figure>
                      </template>
                    </b-carousel>
                  </div>
                </div>
                <div class="col-lg-5 col-md-12 mb-5">
                  <div class="d-flex justify-content-start">
                    <h4 class="text-center text-uppercase mb-3">Learn to cook from the world's best chefs</h4>
                  </div>
                  <p class="mb-3" align="justify">
                    Learn to cook by video masterclasses from the very best Michelin chefs with the best recipes anyone can make.
                    The best chefs in the world teach you how to become a master chef at home.
                    <br>
                    <br>
                    The website has a multilanguage feature, it is Server Side Rendered and hydrates into a Single Page Application as soon a visitor lands on any page.
                    The website has strong SEO characteristics for some good Google search results.
                    The frontend is created with
                    <a href="https://nuxtjs.org/" target="_blank" class="link">Nuxt.js</a>.
                    The backend is created with
                    <a href="https://www.contentful.com/" target="_blank" class="link">Contentful</a> headless CMS.
                    The useraccount and video content are hosted via
                    <a href="https://audienceplayer.nl/" target="_blank" class="link">AudiencePlayer</a> connected with a
                    <a href="https://graphql.org/" target="_blank" class="link">GraphQL</a> API.
                  </p>
                  <b-button
                    @click="openUrlNewTab('https://www.cheflix.com/nl/')"
                    icon-left="earth"
                  >www.cheflix.com</b-button>
                </div>
              </div>
              <div>
                <nuxt-link to="/partou" class="mark-other-project">
                  <i class="fas fa-chevron-left"></i>&nbsp;Prev.
                </nuxt-link>
                <nuxt-link to="/streken" class="mark-other-project float-right">
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
          image: require("@/assets/img/work-cheflix-01.jpg")
        },
        {
          image: require("@/assets/img/work-cheflix-02.jpg")
        },
        {
          image: require("@/assets/img/work-cheflix-03.jpg")
        },
        {
          image: require("@/assets/img/work-cheflix-04.jpg")
        },
        {
          image: require("@/assets/img/work-cheflix-05.jpg")
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