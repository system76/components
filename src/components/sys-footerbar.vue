/**
 * src/components/sys-footerbar.vue
 * The system76 website footer
 */

<template>
  <footer :class="$style.footer">
    <div :class="$style.container">
      <nav :class="$style.nav">
        <div :class="$style.links">
          <component
            :is="linkComponent(urlContact)"
            v-bind="linkAttributes(urlContact)"
            :class="$style.link"
          >
            Contact
          </component>

          <a
            href="https://support.system76.com"
            :class="$style.link"
          >
            Support
          </a>

          <component
            :is="linkComponent(urlAbout)"
            v-bind="linkAttributes(urlAbout)"
            :class="$style.link"
          >
            About Us
          </component>

          <a
            href="http://blog.system76.com"
            :class="$style.link"
          >
            Blog
          </a>

          <component
            :is="linkComponent(urlCareers)"
            v-bind="linkAttributes(urlCareers)"
            :class="$style.link"
          >
            Careers
          </component>

          <component
            :is="linkComponent(urlSpecials)"
            v-bind="linkAttributes(urlSpecials)"
            :class="$style.link"
          >
            Specials
          </component>
        </div>

        <div :class="$style.links">
          <component
            :is="linkComponent(urlShipping)"
            v-bind="linkAttributes(urlShipping)"
            :class="$style.link"
          >
            Shipping Information
          </component>

          <component
            :is="linkComponent(urlFinancing)"
            v-bind="linkAttributes(urlFinancing)"
            :class="$style.link"
          >
            Financing
          </component>

          <component
            :is="linkComponent(urlWarranty)"
            v-bind="linkAttributes(urlWarranty)"
            :class="$style.link"
          >
            Warranty &amp; Returns
          </component>

          <component
            :is="linkComponent(urlPrivacy)"
            v-bind="linkAttributes(urlPrivacy)"
            :class="$style.link"
          >
            Privacy Policy
          </component>

          <component
            :is="linkComponent(urlDisclaimer)"
            v-bind="linkAttributes(urlDisclaimer)"
            :class="$style.link"
          >
            Disclaimer
          </component>

          <component
            :is="linkComponent(urlTerms)"
            v-bind="linkAttributes(urlTerms)"
            :class="$style.link"
          >
            Terms &amp; Conditions
          </component>
        </div>
        <div :class="$style.connections">
          <div>
            <div
              v-if="showNewsletterButton"
              :class="$style.subscribe"
            >
              <p>Subscribe for updates on products, OS features, and promotions.</p>
              <p>
                <button
                  class="button"
                  @click.prevent="$emit('subscribe')"
                >
                  Subscribe
                </button>
              </p>
            </div>
            <div :class="$style.socials">
              <a
                aria-label="Facebook"
                href="https://facebook.com/system76/"
                rel="noopener"
                target="_blank"
                title="Facebook"
                :class="$style.social"
              >
                <font-awesome-icon :icon="faFacebook" />
              </a>

              <a
                aria-label="GitHub"
                href="https://github.com/system76"
                rel="noopener"
                target="_blank"
                title="GitHub"
                :class="$style.social"
              >
                <font-awesome-icon :icon="faGithub" />
              </a>

              <a
                aria-label="Instagram"
                href="https://instagram.com/system76_com"
                rel="noopener"
                target="_blank"
                title="Instagram"
                :class="$style.social"
              >
                <font-awesome-icon :icon="faInstagram" />
              </a>

              <a
                aria-label="Twitter"
                href="https://twitter.com/system76/"
                rel="noopener"
                target="_blank"
                title="Twitter"
                :class="$style.social"
              >
                <font-awesome-icon :icon="faTwitter" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div :class="$style.copy">
        <div :class="$style.copyright">
          <slot name="copyright">
            Copyright &copy; {{ currentYear() }} System76, Inc.
          </slot>
        </div>

        <template v-if="$slots.default">
          <div :class="$style.copyright">
            <slot />
          </div>
        </template>

        <div :class="$style.trademarks">
          <slot name="trademarks">
            Intel, the Intel Logo, Intel Core, Iris, and Xeon are trademarks of
            Intel Corporation or its subsidiaries in the U.S. and/or other
            countries.
          </slot>
        </div>
      </div>
    </div>
  </footer>
</template>

<style module>
  .footer {
    background-color: var(--color-warm-gray);
    color: var(--color-light-gray);
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .nav {
    align-content: flex-start;
    align-items: flex-start;
    font-family: var(--font-family-sans);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem 0.5rem 0;
  }

  .links {
    flex: 1 1 auto;
  }

  .link {
    color: inherit;
    display: block;
    outline: none;
    padding: 0.5rem;
    text-decoration: none;
  }

  .connections {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
  }

  .subscribe {
    text-align: center;
    margin: 2em auto;
    max-width: 30ch;
  }

  .subscribe > p:first-child {
    margin: 0;
  }

  .socials {
    align-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 100%;
    justify-content: center;
  }

  .social {
    align-content: center;
    align-items: center;
    color: inherit;
    display: flex;
    font-size: 1.8rem;
    height: 48px;
    justify-content: center;
    outline: none;
    padding: 0.5rem;
    transition: color 250ms ease;
    width: 48px;
  }

  .link:hover,
  .link:focus {
    text-decoration: underline;
  }

  .social:hover,
  .social:focus {
    color: var(--color-orange);
  }

  .copy {
    font-family: var(--font-family-slab);
    font-weight: 300;
    padding: 0.5rem 1rem 1rem;
    text-align: center;
  }

  .copyright {
    margin-bottom: 0.5rem;
  }

  .trademarks {
    font-size: 0.675rem;
  }

  button {
    border-radius: 4px;
    background-color: #6ACAD8;
    -webkit-font-smoothing: antialiased;
    align-content: center;
    align-items: center;
    appearance: none;
    border-radius: 0.25em;
    border: 0.15em solid transparent;
    cursor: pointer;
    display: inline-flex;
    font-style: normal;
    font-weight: 400;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
    transition-duration: 100ms;
    transition-property: background-color, border-color, box-shadow;
    transition-timing-function: ease;
    user-select: none;
    letter-spacing: normal;
    font-family: var(--font-family-sans);
    text-transform: uppercase;
    font-size: 1rem;
    padding: 0.4em 1.6em;
  }

  @media (min-width: 50rem) {
    .links {
      flex: 0 0 15rem;
    }

    .connections {
      flex: 1 1 auto;
      align-items: flex-end;
    }

    .connections > div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .subscribe {
      text-align: center;
      margin: .5rem 0;
    }
  }

  @media (min-width: 60rem) {
    .social {
      font-size: 2.2rem;
      height: 64px;
      width: 64px;
    }
  }

  @media (min-width: 1280px) {
    .socials {
      margin: -0.5rem;
    }

    .social {
      margin: 0.5rem;
    }
  }
</style>

<script>
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'SysFooterbar',

  components: {
    FontAwesomeIcon
  },

  props: {
    backgroundClass: {
      type: String,
      default: null
    },

    showNewsletterButton: {
      type: Boolean,
      default: false
    },

    urlContact: {
      type: String,
      default: '/contact'
    },

    urlAbout: {
      type: String,
      default: '/about'
    },

    urlCareers: {
      type: String,
      default: '/careers'
    },

    urlSpecials: {
      type: String,
      default: '/specials'
    },

    urlShipping: {
      type: String,
      default: '/shipping'
    },

    urlFinancing: {
      type: String,
      default: '/financing'
    },

    urlWarranty: {
      type: String,
      default: '/warranty'
    },

    urlPrivacy: {
      type: String,
      default: '/privacy'
    },

    urlDisclaimer: {
      type: String,
      default: '/disclaimer'
    },

    urlTerms: {
      type: String,
      default: '/terms'
    }
  },

  computed: {
    faFacebook: () => faFacebook,
    faGithub: () => faGithub,
    faInstagram: () => faInstagram,
    faTwitter: () => faTwitter
  },

  methods: {
    // This has to be a method instead of a computed property to force it to
    // recalculate on rerender.
    currentYear () {
      return (new Date()).getFullYear()
    },

    linkAttributes (url) {
      switch (this.linkComponent(url)) {
        case 'nuxt-link':
        case 'router-link':
          return { to: url }

        default:
          return { href: url }
      }
    },

    linkComponent (url) {
      if (!url.startsWith('/')) {
        return 'a'
      } else if (this.$nuxt != null) {
        return 'nuxt-link'
      } else if (this.$route != null) {
        return 'router-link'
      } else {
        return 'a'
      }
    }
  }
}
</script>
