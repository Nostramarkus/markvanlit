<template>
  <div>
    <div class="parallax-container-my-work">
      <client-only>
        <parallax :speed-factor="0.3" direction="down">
          <div class="h-100 text-center parralax-home-top">
            <u-animate-container>
              <u-animate name="fadeInDown" duration="1s" :offset="0">
                <img src="@/assets/img/widgets.svg" class="logo-img z-depth-2">
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
              <h2 class="text-uppercase text-center font-weight-bold mb-4 pt-5">Booking widgets</h2>
            </u-animate>
            <u-animate name="fadeIn" duration="2s">
              <hr>
              <div class="row pt-3 pt-md-5 mb-5">
                <div class="col-lg-8 offset-lg-2 col-md-12">
                  <h4 class="text-center text-uppercase mb-3">Drop-in widgets for any website</h4>
                  <p class="mb-3">
                    Home owners of
                    <nuxt-link to="/villa-for-you" class="link">Villa&nbsp;for&nbsp;You</nuxt-link>
                    can show their accommodations on their own website with two widgets, which they set up from
                    <nuxt-link to="/myvilla" class="link">MyVilla</nuxt-link>. Both are built with Vue 3, Tailwind CSS
                    and Pinia, and compiled with Vite into Web Components that run in a Shadow DOM. One
                    <code>&lt;script&gt;</code> tag is all a site needs: no framework on the host page, and no styles
                    leaking in or out. Colors, language and which accommodations to show are set with attributes or
                    query parameters. Both widgets are available in Dutch, English, German and French.
                  </p>
                </div>
              </div>

              <div class="row mb-5">
                <div class="col-md-12 mb-3">
                  <h4 class="text-uppercase mb-3">Booking calendar</h4>
                  <p class="mb-3">
                    Visitors pick an accommodation, their travel party and a date range on a calendar that shows the
                    bookable and closed periods. The widget fetches live prices as they go and shows the full
                    breakdown: travel sum, what's included in the stay, additional costs, discounts and a refundable or
                    non-refundable option. The Book button takes them to the booking page on villaforyou.com with
                    everything filled in.
                  </p>
                  <p class="mb-3">Try it out, it's the real thing.</p>
                </div>
                <div class="col-md-12 mb-5">
                  <client-only>
                    <vfy-booking-calender :account-id="demoAccountId" primary-color="#8569c2" secondary-color="#e7e1f3" text-color="#ffffff" language="en">
                      Powered by <a href="https://www.villaforyou.com" target="_blank">Villa for You</a>
                    </vfy-booking-calender>
                  </client-only>
                </div>
              </div>

              <div class="row mb-5">
                <div class="col-md-12 mb-3">
                  <h4 class="text-uppercase mb-3">Accommodations lister</h4>
                  <p class="mb-3">
                    A list of accommodations with photos, ratings and prices, with pagination and an optional Google
                    map next to it. On a narrow container the visitor switches between the list and the map. Every
                    tile links straight to the accommodation on villaforyou.com.
                  </p>
                </div>
                <div class="col-md-12 mb-5 widget-full-width">
                  <client-only>
                    <vfy-accommodations-lister :host-id="listerHostId" primary-color="#8569c2" secondary-color="#e7e1f3" text-color="#ffffff" language="en" show-map>
                      Powered by <a href="https://www.villaforyou.com" target="_blank">Villa for You</a>
                    </vfy-accommodations-lister>
                  </client-only>
                </div>
              </div>

              <div>
                <nuxt-link to="/myvilla" class="mark-other-project">
                  <i class="fas fa-chevron-left"></i>&nbsp;Prev.
                </nuxt-link>
                <nuxt-link to="/partou" class="mark-other-project float-right">
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

const WIDGET_SCRIPT = "https://widgets.villaforyou.com/widget-booking-calender.js";
// Production account whose accommodations the calendar demo shows.
const DEMO_ACCOUNT_ID = "aj261O0A0M052P5C2O3Q340M04580C572Q5K62042B0V5956612M";
// Production host whose accommodations the lister demo shows.
const LISTER_HOST_ID = "16787";

export default {
  name: "home",
  components: {
    Parallax
  },
  data() {
    return {
      demoAccountId: DEMO_ACCOUNT_ID,
      listerHostId: LISTER_HOST_ID
    };
  },
  mounted() {
    // One bundle defines both <vfy-booking-calender> and <vfy-accommodations-lister>.
    if (!document.querySelector(`script[src="${WIDGET_SCRIPT}"]`)) {
      const script = document.createElement("script");
      script.src = WIDGET_SCRIPT;
      document.body.appendChild(script);
    }
    // <client-only> renders the element a tick after this page mounts.
    customElements.whenDefined("vfy-booking-calender").then(() => this.$nextTick(this.whitenBookChevron));
  },
  methods: {
    // The widget picks a black or white chevron from the primary color's lightness, and
    // #8569c2 tips it to black. Page styles can't reach into the shadow root, so add it there.
    whitenBookChevron() {
      const root = this.$el.querySelector("vfy-booking-calender")?.shadowRoot;
      if (!root || root.querySelector("style[data-book-chevron]")) {
        return;
      }
      const style = document.createElement("style");
      style.setAttribute("data-book-chevron", "");
      style.textContent = "button.btn > img { filter: invert(1); }";
      root.appendChild(style);
    }
  }
};
</script>

<style>
/* Break the lister out of .container so it spans the full viewport width. */
.widget-full-width {
  width: 100vw;
  max-width: 100vw;
  flex: 0 0 100vw;
  margin-left: calc(50% - 50vw);
  padding-left: 16px;
  padding-right: 16px;
}
</style>
