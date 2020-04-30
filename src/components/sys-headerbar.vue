/**
 * src/components/sys-headerbar.vue
 * The system76 website header with links.
 */

<template>
  <header :class="$style.header">
    <nav :class="$style.nav">
      <component
        :is="linkComponent(urlHomepage)"
        v-bind="linkAttributes(urlHomepage)"
        aria-label="Home"
        title="Home"
        :class="$style.home"
      >
        <sys-logo-type :class="$style.logo" />
      </component>

      <div :class="$style.pages">
        <component
          :is="linkComponent(urlLaptops)"
          v-bind="linkAttributes(urlLaptops)"
          :class="$style.page"
        >
          laptops
        </component>

        <component
          :is="linkComponent(urlDesktops)"
          v-bind="linkAttributes(urlDesktops)"
          :class="$style.page"
        >
          desktops
        </component>

        <component
          :is="linkComponent(urlMini)"
          v-bind="linkAttributes(urlMini)"
          :class="$style.page"
        >
          mini
        </component>

        <component
          :is="linkComponent(urlServers)"
          v-bind="linkAttributes(urlServers)"
          :class="$style.page"
        >
          servers
        </component>

        <component
          :is="linkComponent(urlPopOs)"
          v-bind="linkAttributes(urlPopOs)"
          :class="$style.page"
        >
          pop!_os
        </component>
      </div>

      <div :class="$style.quicks">
        <component
          :is="linkComponent(urlContact)"
          v-bind="linkAttributes(urlContact)"
          aria-label="Contact"
          title="Contact"
          :class="$style.quick"
        >
          <font-awesome-icon
            :class="$style.icon"
            :icon="faComments"
          />
        </component>

        <a
          aria-label="Support"
          title="Support"
          href="https://support.system76.com"
          :class="$style.quick"
        >
          <font-awesome-icon
            :class="$style.icon"
            :icon="faLifeRing"
          />
        </a>

        <component
          :is="linkComponent(urlAccount)"
          v-if="authenticated"
          v-bind="linkAttributes(urlAccount)"
          aria-label="My Account"
          title="My Account"
          :class="$style.quick"
        >
          <font-awesome-icon
            :class="$style.icon"
            :icon="faUser"
          />
        </component>

        <component
          :is="linkComponent(urlAdmin)"
          v-if="authenticated && admin"
          v-bind="linkAttributes(urlAdmin)"
          aria-label="Admin"
          title="Admin"
          :class="$style.quick"
        >
          <font-awesome-icon
            :class="$style.icon"
            :icon="faCogs"
          />
        </component>

        <component
          :is="linkComponent(urlLogout)"
          v-if="authenticated"
          v-bind="linkAttributes(urlLogout)"
          aria-label="Log Out"
          title="Log Out"
          :class="$style.quick"
        >
          <font-awesome-icon
            :class="$style.icon"
            :icon="faSignOutAlt"
          />
        </component>

        <component
          :is="linkComponent(urlLogin)"
          v-if="!authenticated"
          v-bind="linkAttributes(urlLogin)"
          aria-label="Log In"
          title="Log In"
          :class="$style.quick"
        >
          <font-awesome-icon
            :class="$style.icon"
            :icon="faUser"
          />
        </component>
      </div>
    </nav>
  </header>
</template>

<style module>
  .header {
    background-color: var(--color-white);
    color: var(--color-warm-gray);
    font-family: var(--font-family-slab);
    position: relative;
    z-index: 6;
  }

  .nav {
    display: grid;
    grid-gap: 1rem;
    grid-template-areas:
      "logo auto quicks"
      "pages pages pages";
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
    padding: 1rem;
    margin: 0 auto;
    max-width: 1280px;
  }

  .home {
    grid-area: logo;
    margin: -0.5rem;
    outline: none;
    padding: 0.5rem;
    transition: box-shadow 250ms ease;
  }

  .logo {
    max-width: 22ch;
  }

  .pages {
    grid-area: pages;
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex: 999 1 auto;
    justify-content: flex-start;
    margin: -0.5rem;
  }

  .page {
    align-content: center;
    align-items: center;
    color: inherit;
    display: flex;
    flex: 0 0 auto;
    font-weight: 300;
    justify-content: center;
    outline: none;
    padding: 0.5rem;
    text-decoration: none;
    transition: box-shadow 250ms ease;
  }

  .page.active {
    font-weight: 700;
  }

  .quicks {
    grid-area: quicks;
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex: 1 0 auto;
    margin: -0.5rem;
    justify-content: flex-end;
  }

  .quick {
    align-content: center;
    align-items: center;
    color: inherit;
    display: flex;
    justify-content: center;
    outline: none;
    height: 42px;
    width: 42px;
    transition: box-shadow 250ms ease;
  }

  .home:focus,
  .page:focus,
  .quick:focus {
    border-radius: 3px;
    box-shadow:
      inset 0 0 0 1px var(--color-orange),
      0 0 12px var(--color-orange),
      0 0 1px var(--color-orange);
    color: inherit;
  }

  @media (min-width: 920px) {
    .nav {
      grid-template-areas: "logo pages quicks";
      grid-template-columns: 22ch 1fr auto;
      grid-template-rows: auto;
    }

    .pages {
      justify-content: center;
    }

    .page {
      padding: 1rem;
    }

    .quick {
      height: 48px;
      width: 48px;
    }
  }

  @media (min-width: 1000px) {
    .page {
      margin: 0 0.5rem;
    }
  }
</style>

<script>
import { faComments, faLifeRing, faUser, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { SysLogoType } from '@system76/design'

export default {
  name: 'SysHeaderbar',

  components: {
    FontAwesomeIcon,
    SysLogoType
  },

  props: {
    admin: {
      type: Boolean,
      default: false
    },

    authenticated: {
      type: Boolean,
      default: false
    },

    backgroundClass: {
      type: String,
      default: null
    },

    urlHomepage: {
      type: String,
      default: '/'
    },

    urlLaptops: {
      type: String,
      default: '/laptops'
    },

    urlDesktops: {
      type: String,
      default: '/desktops'
    },

    urlMini: {
      type: String,
      default: '/desktops/meerkat'
    },

    urlServers: {
      type: String,
      default: '/servers'
    },

    urlPopOs: {
      type: String,
      default: '/pop'
    },

    urlContact: {
      type: String,
      default: '/contact'
    },

    urlAccount: {
      type: String,
      default: '/my-account'
    },

    urlAdmin: {
      type: String,
      default: '/admin'
    },

    urlLogin: {
      type: String,
      default: '/login'
    },

    urlLogout: {
      type: String,
      default: '/my-account/logout'
    }
  },

  computed: {
    faCogs: () => faCogs,
    faComments: () => faComments,
    faLifeRing: () => faLifeRing,
    faSignOutAlt: () => faSignOutAlt,
    faUser: () => faUser
  },

  methods: {
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
