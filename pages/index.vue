<template>
  <div>
    <div class="parallax-container-home">
      <client-only>
        <parallax :speed-factor="0.3" direction="down">
          <div class="h-100 text-center parralax-home-top">
            <u-animate-container>
              <u-animate name="fadeInDown" duration="1s" :offset="0">
                <img src="@/assets/img/mark-van-lit.jpg" class="mark-img z-depth-2">
              </u-animate>
              <u-animate name="fadeInUp" duration="1.3s" :offset="0">
                <h1 class="mb-3 font-weight-bold text-white mark-van-lit">Mark van Lit</h1>
                <h4
                  class="mb-0 text-uppercase font-weight-bold text-white front-end-dev"
                >Front-end engineer</h4>
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
        <section id="aboutMe" class="section pt-5">
          <u-animate-container>
            <u-animate name="fadeIn" duration="1s" :offset="300">
              <h2 class="text-uppercase text-center font-weight-bold mb-4 pt-0">About me</h2>
            </u-animate>
            <u-animate name="fadeIn" duration="1s" :offset="300">
              <hr>
              <div class="row pt-5">
                <div class="col-lg-5 col-md-12">
                  <div class="d-flex justify-content-start">
                    <h4 class="text-center text-uppercase mb-5">Enjoying the vue</h4>
                  </div>
                  <p class="grey-text mb-3" align="justify">
                    I am a passionate web focussed front-end developer with a background in graphic design.
                    With over 10 years of experience i love to create anything from
                    a small custom website to high-performance scalable web applications.
                    <br>
                    <br>I'm a big fan of the
                    <a
                      href="https://vuejs.org/"
                      target="_blank"
                      class="link grey-text"
                    >Vue&nbsp;js</a> framework that i use in most of my projects. For scalability and/or SEO
                    purposes i like to work with
                    <a
                      href="https://www.nuxtjs.org/"
                      target="_blank"
                      class="link grey-text"
                    >Nuxt js</a> which enables me to provide fancy stuff like Server Side Rendering
                    <a
                      href="https://www.digifluencer.com/2019/07/15/what-is-ssr-and-how-it-impacts-seo/"
                      target="_blank"
                      class="link grey-text"
                    >(SSR)</a>.
                    Every year i attend to the
                    <a
                      href="https://www.frontenddeveloperlove.com/"
                      target="_blank"
                      class="link grey-text"
                    >Front-end&nbsp;Love</a> conference and the
                    <a
                      href="https://vuejs.amsterdam/"
                      target="_blank"
                      class="link grey-text"
                    >Vue&nbsp;js&nbsp;Amsterdam</a> conference to stay up to date with the latest techniques in the fast moving front-end landscape.
                    <br>
                    <br>Besides Vue js i have experience working with similar frameworks like
                    <a
                      href="https://angular.io/"
                      target="_blank"
                      class="link grey-text"
                    >Angular</a> and
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      class="link grey-text"
                    >React&nbsp;js</a>. I can handle them just fine, but when it's up to me, i'll bring Vue to the party.
                  </p>
                </div>
                <div class="col-lg-6 offset-lg-1 col-md-12 mb-5">
                  <div class="d-flex justify-content-start">
                    <h4 class="text-center text-uppercase mb-5 mt-5 mt-md-0">My skills</h4>
                  </div>
                  <div class="row text-center">
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                      target="_blank"
                      class="col-6 col-md-3 mark-skill"
                    >
                      <img src="@/assets/img/html5.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt">HTML 5</p>
                    </a>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Archive/CSS3"
                      target="_blank"
                      class="col-6 col-md-3 mark-skill"
                    >
                      <img src="@/assets/img/css3.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt">CSS 3</p>
                    </a>
                    <a
                      href="https://sass-lang.com/"
                      target="_blank"
                      class="col-6 col-md-3 mark-skill"
                    >
                      <img src="@/assets/img/sass.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt">SASS</p>
                    </a>
                    <a
                      href="https://www.javascript.com/"
                      target="_blank"
                      class="col-6 col-md-3 mark-skill"
                    >
                      <img src="@/assets/img/javascript.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt-xl">Javascript</p>
                    </a>
                    <a href="https://vuejs.org/" target="_blank" class="col-6 col-md-3 mark-skill">
                      <img src="@/assets/img/vue.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt">Vue</p>
                    </a>
                    <a href="https://nuxtjs.org/" target="_blank" class="col-6 col-md-3 mark-skill">
                      <img src="@/assets/img/nuxt.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt">Nuxt</p>
                    </a>
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      class="col-6 col-md-3 mark-skill"
                    >
                      <img src="@/assets/img/react.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt">React</p>
                    </a>
                    <a href="https://angular.io/" target="_blank" class="col-6 col-md-3 mark-skill">
                      <img src="@/assets/img/angular.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt">Angular</p>
                    </a>
                    <a
                      href="http://es6-features.org/"
                      target="_blank"
                      class="col-6 col-md-3 mark-skill"
                    >
                      <img src="@/assets/img/es6.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt">ES6</p>
                    </a>
                    <a href="https://nodejs.org/" target="_blank" class="col-6 col-md-3 mark-skill">
                      <img src="@/assets/img/node.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt">Node</p>
                    </a>
                    <a
                      href="https://www.adobe.com/nl/products/illustrator.html"
                      target="_blank"
                      class="col-6 col-md-3 mark-skill"
                    >
                      <img src="@/assets/img/illustrator.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt-xl">Illustrator</p>
                    </a>
                    <a
                      href="https://www.adobe.com/nl/products/photoshop.html"
                      target="_blank"
                      class="col-6 col-md-3 mark-skill"
                    >
                      <img src="@/assets/img/photoshop.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt-xl">Photoshop</p>
                    </a>
                    <a
                      href="https://www.php.net/"
                      target="_blank"
                      class="col-6 col-md-3 mark-skill"
                    >
                      <img src="@/assets/img/php.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt">PHP</p>
                    </a>
                    <a
                      href="https://www.progress.com/openedge"
                      target="_blank"
                      class="col-6 col-md-3 mark-skill"
                    >
                      <img src="@/assets/img/progress.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt-xl">Progress</p>
                    </a>
                    <a
                      href="https://getbootstrap.com/"
                      target="_blank"
                      class="col-6 col-md-3 mark-skill"
                    >
                      <img src="@/assets/img/bootstrap.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt-xl">Bootstrap</p>
                    </a>
                    <a href="https://jquery.com/" target="_blank" class="col-6 col-md-3 mark-skill">
                      <img src="@/assets/img/jquery.svg" class="mark-skill-svg">
                      <p class="text-uppercase font-weight-bold mark-skill-txt">jQuery</p>
                    </a>
                  </div>
                </div>
              </div>
            </u-animate>
          </u-animate-container>
        </section>
      </div>
      <div class="mark-qoute">
        <div class="mark-diagonaal-wrapper">
          <img
            src="@/assets/img/mark-diagonaal.svg"
            class="mark-diagonaal mark-diagonaal-top mark-diagonaal-flip-x mb-5"
          >
        </div>
        <div class="text-center text-white my-5 py-5">
          <u-animate-container>
            <u-animate name="fadeIn" duration="1s" :offset="250">
              <h3 class="mb-4">
                <i class="fas fa-quote-left" aria-hidden="true"></i> Your application is only as good as it is useful
                <i
                  class="fas fa-quote-right"
                  aria-hidden="true"
                ></i>
              </h3>
              <h5 class="text-center font-italic">~ Evan You</h5>
            </u-animate>
          </u-animate-container>
        </div>
        <div class="mark-diagonaal-wrapper">
          <img src="@/assets/img/mark-diagonaal.svg" class="mark-diagonaal mt-5">
        </div>
      </div>
      <div class="container">
        <section class="section mb-5 pt-0">
          <u-animate-container>
            <u-animate name="fadeIn" duration="1s" :offset="250">
              <h2 class="text-uppercase text-center font-weight-bold my-4 pt-5">What I do</h2>
            </u-animate>
            <u-animate name="fadeIn" duration="1s" :offset="250">
              <hr>
              <div class="row">
                <div class="col-lg-3 col-md-6 text-center mt-5 px-5">
                  <div class="icon-area">
                    <div class="circle-icon">
                      <i class="fas fa-desktop"></i>
                    </div>
                    <br>
                    <strong>WEB DESIGN</strong>
                    <p>Desgining full responsive high-end websites</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center mt-5 px-5">
                  <div class="icon-area">
                    <div class="circle-icon">
                      <i class="fas fa-code"></i>
                    </div>
                    <br>
                    <strong>CODING</strong>
                    <p>Being a developer i'm pretty good at this one</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center mt-5 px-5">
                  <div class="icon-area">
                    <div class="circle-icon">
                      <i class="fas fa-cogs"></i>
                    </div>
                    <br>
                    <strong>WEBAPPS</strong>
                    <p>Creating highly custom web applications</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center mt-5 px-5">
                  <div class="icon-area">
                    <div class="circle-icon">
                      <i class="fas fa-laptop"></i>
                    </div>
                    <br>
                    <strong>UI/UX</strong>
                    <p>Bulletproof UI and excellent UX</p>
                  </div>
                </div>
              </div>
            </u-animate>
          </u-animate-container>
        </section>
      </div>
    </div>
    <div class="mark-qoute">
      <div class="mark-diagonaal-wrapper">
        <img src="@/assets/img/mark-diagonaal.svg" class="mark-diagonaal mark-diagonaal-top mb-5">
      </div>
      <div class="text-center text-white my-5 py-5">
        <u-animate-container>
          <u-animate name="fadeIn" duration="1s" :offset="250">
            <h3 class="mb-4">
              <i class="fas fa-quote-left"></i> What separates web design from art is that web design is meant to be functional
              <i
                class="fas fa-quote-right"
              ></i>
            </h3>
            <h5 class="text-center font-italic">~ Sébastien Chopin</h5>
          </u-animate>
        </u-animate-container>
      </div>
      <div class="mark-diagonaal-wrapper">
        <img
          src="@/assets/img/mark-diagonaal.svg"
          class="mark-diagonaal mark-diagonaal-flipped mt-5"
        >
      </div>
    </div>

    <section id="projects" class="mt-2 pb-5 mb-4">
      <div class="container">
        <div class="row mt-4">
          <div class="col-md-12">
            <h2 class="text-uppercase text-center font-weight-bold my-4 pt-5">Some projects</h2>
            <hr class="mark-hr">
          </div>
        </div>
      </div>
      <br>
      <div class="row ml-5 mr-5 mt-2">
        <nuxt-link to="/oyo-vacation-homes" class="col-lg-3 col-md-6">
          <div class="view overlay zoom z-depth-2">
            <img src="@/assets/img/oyo-vacation-homes.jpg" class="img-fluid">
          </div>
          <p
            class="text-uppercase text-center font-weight-bold blue-grey-text mt-4 mb-5"
          >OYO Vacation Homes</p>
        </nuxt-link>
        <nuxt-link to="/belvilla" class="col-lg-3 col-md-6">
          <div class="view overlay zoom z-depth-2">
            <img src="@/assets/img/belvilla.jpg" class="img-fluid">
          </div>
          <p class="text-uppercase text-center font-weight-bold blue-grey-text mt-4 mb-5">Belvilla</p>
        </nuxt-link>
        <nuxt-link to="/design-for-interior" class="col-lg-3 col-md-6">
          <div class="view overlay zoom z-depth-2">
            <img src="@/assets/img/design-for-interior.jpg" class="img-fluid">
          </div>
          <p
            class="text-uppercase text-center font-weight-bold blue-grey-text mt-4 mb-5"
          >Design For Interior</p>
        </nuxt-link>
        <nuxt-link to="/wicked-oneliners" class="col-lg-3 col-md-6">
          <div class="view overlay zoom z-depth-2">
            <img src="@/assets/img/wicked-oneliners.jpg" class="img-fluid">
          </div>
          <p
            class="text-uppercase text-center font-weight-bold blue-grey-text mt-4 mb-5"
          >Wicked oneliners</p>
        </nuxt-link>
      </div>
      <div class="row ml-5 mr-5 mt-2">
        <nuxt-link to="/streken" class="col-lg-3 col-md-6">
          <div class="view overlay zoom z-depth-2">
            <img src="@/assets/img/streken.jpg" class="img-fluid">
          </div>
          <p class="text-uppercase text-center font-weight-bold blue-grey-text mt-4 mb-5">Streken</p>
        </nuxt-link>
        <nuxt-link to="/beddorama" class="col-lg-3 col-md-6">
          <div class="view overlay zoom z-depth-2">
            <img src="@/assets/img/beddorama.jpg" class="img-fluid">
          </div>
          <p class="text-uppercase text-center font-weight-bold blue-grey-text mt-4 mb-5">Beddorama</p>
        </nuxt-link>
        <nuxt-link to="/dancenter" class="col-lg-3 col-md-6">
          <div class="view overlay zoom z-depth-2">
            <img src="@/assets/img/dancenter.jpg" class="img-fluid">
          </div>
          <p class="text-uppercase text-center font-weight-bold blue-grey-text mt-4 mb-5">Dancenter</p>
        </nuxt-link>
        <nuxt-link to="/this-website" class="col-lg-3 col-md-6">
          <div class="view overlay zoom z-depth-2">
            <img src="@/assets/img/mark-van-lit-site.jpg" class="img-fluid">
          </div>
          <p
            class="text-uppercase text-center font-weight-bold blue-grey-text mt-4 mb-5"
          >This website</p>
        </nuxt-link>
      </div>
    </section>

    <div class="pb-5 pb-md-0" style="background-color: #f3f3f5;">
      <div class="testimonial-wrapper pt-3 pb-5">
        <section class="section py-5 mb-5 px-0">
          <u-animate-container>
            <u-animate name="fadeIn" duration="1s" :offset="300">
              <h2 class="text-uppercase text-center font-weight-bold my-4">Testimonials</h2>
            </u-animate>
          </u-animate-container>
          <u-animate-container>
            <u-animate name="fadeIn" duration="1s" :offset="300">
              <div class="container mb-0">
                <div class="section py-0">
                  <hr class="mark-hr">
                </div>
              </div>
              <div class="testimonial text-center">
                <b-carousel
                  :arrow="true"
                  :arrow-hover="false"
                  animated="fade"
                  :autoplay="false"
                  icon-size="is-large"
                >
                  <b-carousel-item>
                    <p class="mx-5 mx-md-0">
                      <i class="fas fa-quote-left"></i> Mark and I worked together on a mobile application for Belvilla. He has a great experience and positive attitude, not fearing to tackle issues that arise. Being experienced both on the frontend and backend, he was able to provide quality solutions in no time.
                      Working with him is an excellent experience and he is a great asset to every team.
                    </p>
                    <div class="mt-4">
                      <h5>
                        <strong>Eleftherios Psitopoulos</strong>
                      </h5>
                      <p>Front-end developer at Code Seed</p>
                    </div>
                    <div class="indigo-text">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </b-carousel-item>
                  <b-carousel-item>
                    <p class="mx-5 mx-md-0">
                      <i class="fas fa-quote-left"></i> I had the privilege of working with Mark while I was in Belvilla. Mark is proactive, result oriented, responsible and technically sound employee and he is always ready to put all his energy and time to get the job done. He has an exceptional troubleshooting and analytical skill. He is a great asset to any company.
                    </p>
                    <div class="mt-4">
                      <h5>
                        <strong>Resham Agrawal</strong>
                      </h5>
                      <p>QAD Consultant at Medline Europe</p>
                    </div>
                    <div class="indigo-text">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </b-carousel-item>
                  <b-carousel-item>
                    <p class="mx-5 mx-md-0">
                      <i class="fas fa-quote-left"></i> Mark is een echte vakman; gedreven webdeveloper. Inventariseert goed wat wensen zijn en weet dit te vertalen naar een mooie, strakke conceptuele webuitwerking. Daarbij denkt hij graag mee in oplossingen en mogelijkheden, en streeft naar perfectie. Hierbij schuwt hij geen nieuwe ICT uitdagingen.
                    </p>
                    <div class="mt-4">
                      <h5>
                        <strong>Susan Klijsen - van Elteren</strong>
                      </h5>
                      <p>Eigenaresse Design For Interior</p>
                    </div>
                    <div class="indigo-text">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </b-carousel-item>
                </b-carousel>
              </div>
            </u-animate>
          </u-animate-container>
        </section>
      </div>
    </div>

    <div class="container">
      <section id="contact" class="section mb-4">
        <h2 class="text-center text-uppercase font-weight-bold my-4 pt-5">Contact me</h2>
        <hr class="mark-hr">
        <div class="row">
          <div class="col-md-8 mb-5">
            <div class="row">
              <div class="col-md-6">
                <div class="md-form mb-3">
                  <label>Your name</label>
                  <b-input v-model="naam"></b-input>
                </div>
              </div>
              <div class="col-md-6">
                <div class="md-form mb-3">
                  <label class>Your e-mail</label>
                  <b-input
                    v-model="email"
                    :class="{'border border-danger': borderDangerEmail}"
                    @keyup.native="borderDangerEmail = false"
                  ></b-input>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-3">
                  <label class>Subject</label>
                  <b-input v-model="onderwerp"></b-input>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-3">
                  <label for="form76" class>Your message</label>
                  <b-input v-model="bericht" type="textarea" rows="8"></b-input>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <b-button @click="sendContact">
                <i class="far fa-paper-plane"></i>&nbsp; Send
              </b-button>
              <b-modal :active.sync="contactSendModal">
                <section class="modal-card-body">
                  <h4 class="mb-4">Thanks for contacting me!</h4>
                  <p>I usually reply in a few days</p>
                  <b-button class="mt-3" @click="contactSendModal = false">Close</b-button>
                </section>
              </b-modal>
            </div>
          </div>
          <div class="col-md-4">
            <ul class="contact-icons list-unstyled text-center">
              <li>
                <i class="fas fa-map-marker-alt fa-2x mt-5"></i>
                <p>Breda, Noord Brabant, NL</p>
              </li>
              <li>
                <i class="fas fa-phone fa-2x mt-5"></i>
                <p>+31(0)6 24 669 355</p>
              </li>
              <li>
                <i class="fas fa-envelope fa-2x mt-5"></i>
                <p>info@markvanlit.nl</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
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
      naam: "",
      email: "",
      onderwerp: "",
      bericht: "",
      contactSendModal: false,
      borderDangerEmail: false
    };
  },
  methods: {
    sendContact() {
      var deze = this;
      fetch("https://markvanlit.nl/_api/contact.php", {
        method: "POST",
        body: JSON.stringify({
          naam: this.naam,
          email: this.email,
          onderwerp: this.onderwerp,
          bericht: this.bericht
        })
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if (data.success) {
            deze.contactSendModal = true;
            deze.naam = "";
            deze.email = "";
            deze.onderwerp = "";
            deze.bericht = "";
          } else {
            data.errorArr.forEach(error =>
              deze.$buefy.notification.open({
                message: error.errorMsg,
                type: "is-danger",
                duration: 4000
              })
            );
            deze.borderDangerEmail = true;
          }
        });
    }
  }
};
</script>
