<template>
  <div>
    <div class="parallax-container-my-work">
      <client-only>
        <parallax :speed-factor="0.3" direction="down">
          <div class="h-100 text-center parralax-home-top">
            <u-animate-container>
              <u-animate name="fadeInDown" duration="1s" :offset="0">
                <img src="@/assets/img/oyo.svg" class="logo-img z-depth-2">
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
              <h2 class="text-uppercase text-center font-weight-bold mb-4 pt-5">OYO Vacation Homes</h2>
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
                    <h4 class="text-center text-uppercase mb-3">Enterprise system</h4>
                  </div>
                  <p class="grey-text mb-3" align="justify">
                    <a
                      href="https://oyovacationhomes.com/"
                      target="_blank"
                      class="link grey-text"
                    >OYO Vacation Homes</a> is one of the leading vacation rental companies in Europe. They are the
                    organization behind
                    <a
                      href="https://belvilla.nl"
                      target="_blank"
                      class="link grey-text"
                    >Belvilla</a>,
                    <a
                      href="https://www.dancenter.com/"
                      target="_blank"
                      class="link grey-text"
                    >Dancenter</a>,
                    <a
                      href="https://www.topictravel.nl/"
                      target="_blank"
                      class="link grey-text"
                    >Topic&nbsp;Travel</a>,
                    <a
                      href="https://www.villaxl.com/"
                      target="_blank"
                      class="link grey-text"
                    >Villa&nbsp;XL</a>,
                    <a
                      href="https://www.ardennes-relais.be/"
                      target="_blank"
                      class="link grey-text"
                    >Ardennes&nbsp;Relais</a>,
                    <a
                      href="https://www.vacation-apartments.com/"
                      target="_blank"
                      class="link grey-text"
                    >Traum</a>,
                    <a
                      href="https://www.danland.dk/"
                      target="_blank"
                      class="link grey-text"
                    >DanLand</a> and
                    <a
                      href="https://www.admiralstrand.de/"
                      target="_blank"
                      class="link grey-text"
                    >Admiral&nbsp;Strand</a>. With a dedicated team of 6 we work on the OYO Vacation Home enterprise system that
                    feeds content to the websites, registers customer bookings and handles financial processes of all brands.
                  </p>
                </div>
              </div>
              <div>
                <nuxt-link to="/belvilla" class="mark-other-project float-right">
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
          image: require("@/assets/img/work-oyo-vacation-homes-01.jpg")
        },
        {
          image: require("@/assets/img/work-oyo-vacation-homes-02.jpg")
        },
        {
          image: require("@/assets/img/work-oyo-vacation-homes-03.jpg")
        },
        {
          image: require("@/assets/img/work-oyo-vacation-homes-04.jpg")
        },
        {
          image: require("@/assets/img/work-oyo-vacation-homes-05.jpg")
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