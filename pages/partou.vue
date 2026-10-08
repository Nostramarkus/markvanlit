<template>
  <div>
    <div class="parallax-container-my-work">
      <client-only>
        <parallax :speed-factor="0.3" direction="down">
          <div class="h-100 text-center parralax-home-top">
            <u-animate-container>
              <u-animate name="fadeInDown" duration="1s" :offset="0">
                <img src="@/assets/img/project-partou.svg" class="logo-img z-depth-2">
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
            <i class="fas fa-chevron-left"></i>&nbsp;Projects
          </nuxt-link>
          <u-animate-container>
            <u-animate name="fadeIn" duration="2s">
              <h2 class="text-uppercase text-center font-weight-bold mb-4 pt-5">Partou</h2>
            </u-animate>
            <u-animate name="fadeIn" duration="2s">
              <hr>
              <div class="d-lg-flex align-items-center text-center text-lg-left pt-3">
                <img src="@/assets/img/wvhj.png" alt="Partou" class="mx-lg-5 my-3">
                <div>
                  <h5 class="font-weight-bold">
                    <div style="font-size: 28px;">Pricewinner!</div>
                    In 2022 this website has won 1st price for best website <!-- and 2nd price for most populair website --> in the category "Werken bij-omgevingen".
                  </h5>
                  <a href="https://websitevhjaar.nl/" target="_blank" class="wvhjlink">https://websitevhjaar.nl/</a>
                </div>
              </div>
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
                          <img :src="item.image" alt="Partou">
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
                            alt="Partou"
                          >
                        </figure>
                      </template>
                    </b-carousel>
                  </div>
                </div>
                <div class="col-lg-5 col-md-12 mb-5">
                  <div class="d-flex justify-content-start">
                    <h4 class="text-uppercase mb-3">A vacancies website for Partou</h4>
                  </div>
                  <p class="mb-3">
                    Partou is one of the the largest childcare organization in the Netherlands. I've created
                    <a href="https://www.werkenbijpartou.nl" target="_blank" class="link">www.werkenbijpartou.nl</a>.
                    This website focuses on available vacancies in over 900 Partou locations throughout the country. Visitors can apply for a job directly on the website.
                    <br>
                    <br>
                    I've created the front-end with
                    <a href="https://nuxt.com/" target="_blank" class="link">Nuxt</a>
                    and the back-end with
                    <a href="https://www.contentful.com/" target="_blank" class="link">Contentful</a> headless CMS.
                  </p>
                  <b-button
                    @click="openUrlNewTab('https://www.werkenbijpartou.nl')"
                    icon-left="earth"
                  >www.werkenbijpartou.nl</b-button>
                </div>
              </div>
              <div>
                <nuxt-link to="/widgets" class="mark-other-project">
                  <i class="fas fa-chevron-left"></i>&nbsp;Prev.
                </nuxt-link>
                <nuxt-link to="/printman" class="mark-other-project float-right">
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
          image: require("@/assets/img/work-partou-01.jpg")
        },
        {
          image: require("@/assets/img/work-partou-02.jpg")
        },
        {
          image: require("@/assets/img/work-partou-03.jpg")
        },
        {
          image: require("@/assets/img/work-partou-04.jpg")
        },
        {
          image: require("@/assets/img/work-partou-05.jpg")
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