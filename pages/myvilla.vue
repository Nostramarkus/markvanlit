<template>
  <div>
    <div class="parallax-container-my-work">
      <client-only>
        <parallax :speed-factor="0.3" direction="down">
          <div class="h-100 text-center parralax-home-top">
            <u-animate-container>
              <u-animate name="fadeInDown" duration="1s" :offset="0">
                <img src="@/assets/img/myvilla.svg" class="logo-img z-depth-2">
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
              <h2 class="text-uppercase text-center font-weight-bold mb-4 pt-5">MyVilla</h2>
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
                          <img :src="item.image" alt="MyVilla">
                        </a>
                      </b-carousel-item>
                      <span
                        v-if="gallery"
                        @click="switchGallery(false)"
                        class="modal-close is-large bg-secondary"
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
                            alt="MyVilla"
                          >
                        </figure>
                      </template>
                    </b-carousel>
                  </div>
                </div>
                <div class="col-lg-5 col-md-12 mb-5">
                  <div class="d-flex justify-content-start">
                    <h4 class="text-center text-uppercase mb-3">A portal for home owners</h4>
                  </div>
                  <p class="mb-3" >
                    <a
                      href="https://myvilla.villaforyou.com/"
                      target="_blank"
                      class="link"
                    >MyVilla</a> is the owner portal of
                    <nuxt-link to="/villa-for-you" class="link">Villa&nbsp;for&nbsp;You</nuxt-link>.
                    I've built it with Nuxt, Tailwind CSS and Pinia.
                    <br><br>
                    Owners use it to follow their bookings, add their own bookings in a booking calendar, manage prices and 
                    accommodation details, reply to guest reviews, view payments and documents and export their data to Excel or PDF.
                    <br><br>
                    New owners go through an onboarding wizard, and with a few clicks they can put booking widgets on
                    their own website. The portal is available in Dutch, English, German and French.
                  </p>
                  <!-- <b-button
                    @click="openUrlNewTab('https://myvilla.villaforyou.com/')"
                    icon-left="earth"
                  >Visit website</b-button> -->
                </div>
              </div>
              <div>
                <nuxt-link to="/villa-for-you" class="mark-other-project">
                  <i class="fas fa-chevron-left"></i>&nbsp;Prev.
                </nuxt-link>
                <nuxt-link to="/widgets" class="mark-other-project float-right">
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
          image: require("@/assets/img/work-myvilla-01.jpg")
        },
        {
          image: require("@/assets/img/work-myvilla-05.jpg")
        },
        {
          image: require("@/assets/img/work-myvilla-02.jpg")
        },
        {
          image: require("@/assets/img/work-myvilla-03.jpg")
        },
        {
          image: require("@/assets/img/work-myvilla-04.jpg")
        },
        {
          image: require("@/assets/img/work-myvilla-06.jpg")
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