/**
 * src/components/sys-omnibar.vue
 * The sticky top bar on System76 webpages.
 */

<script>
export default {
  name: 'SysOmnibar',

  props: {
    backgroundClass: {
      type: String,
      default: null
    }
  },

  computed: {
    containerClasses () {
      return [
        this.$style.content,
        this.$style[`mobile-${this.mobileTemplate}`],
        this.$style[`tablet-${this.tabletTemplate}`],
        this.$style[`desktop-${this.desktopTemplate}`]
      ]
    },

    copyVnodes () {
      return (this.$slots.copy || [])
        .filter((vnode) => (vnode != null))
    },

    desktopTemplate () {
      if (this.hasPrice) {
        return 1
      } else {
        return 0
      }
    },

    hasCopy () {
      return (this.copyVnodes.length > 0)
    },

    hasGlobal () {
      if (this.$slots.global != null) {
        return (this.$slots.global.length > 0)
      } else {
        return false
      }
    },

    hasLocal () {
      if (this.$slots.local != null) {
        return (this.$slots.local.length > 0)
      } else {
        return false
      }
    },

    hasPrice () {
      return (this.priceVnodes.length > 0)
    },

    mobileTemplate () {
      if (this.hasPrice && this.hasLocal) {
        return 5
      } else if (this.hasGlobal && this.hasLocal) {
        return 4
      } else if (this.hasGlobal) {
        return 3
      } else if (this.hasLocal) {
        return 2
      } else if (this.hasPrice) {
        return 1
      } else {
        return 0
      }
    },

    priceVnodes () {
      return (this.$slots.price || [])
        .filter((vnode) => (vnode != null))
    },

    tabletTemplate () {
      if (this.hasPrice && this.hasLocal) {
        return 6
      } else if (this.hasGlobal && this.hasPrice) {
        return 5
      } else if (this.hasGlobal && this.hasLocal) {
        return 4
      } else if (this.hasGlobal && this.hasCopy) {
        return 3
      } else if (this.hasPrice) {
        return 2
      } else if (this.hasCopy && this.hasLocal) {
        return 1
      } else {
        return 0
      }
    }
  },

  methods: {
    addClasses (vnode, classes) {
      if (Array.isArray(classes)) {
        return classes.reduce((v, c) => this.addClasses(v, c), vnode)
      } else {
        if (vnode.data == null) {
          vnode.data = {}
        }

        if (vnode.data.class == null) {
          vnode.data.class = []
        } else if (typeof vnode.data.class === 'string') {
          vnode.data.class = [vnode.data.class]
        }

        vnode.data.class.push(classes)

        return vnode
      }
    }
  },

  render (h) {
    const globalVnode = (this.hasGlobal)
      ? this.addClasses(this.$slots.global[0], [this.$style.global, this.$style.button])
      : null

    const copyVnodes = (this.hasCopy)
      ? h('div', { class: this.$style.copy }, this.copyVnodes)
      : null

    const priceVnodes = (this.hasPrice)
      ? h('div', { class: this.$style.price }, this.priceVnodes)
      : null

    const localVnode = (this.hasLocal)
      ? this.addClasses(this.$slots.local[0], [this.$style.local, this.$style.button])
      : null

    const children = [globalVnode, copyVnodes, priceVnodes, localVnode]

    return h('header', { class: this.$style.header }, [
      h('div', { class: this.containerClasses }, [
        ...children
      ])
    ])
  }
}; // eslint-disable-line semi
// Needed to make Vue test utils and require-extension-hooks work correctly
</script>

<style module>
  .header {
    background-color: var(--color-omnibar-background);
    border-bottom: 1px solid var(--color-omnibar-border);
    color: var(--color-omnibar-foreground);
    fill: var(--color-omnibar-foreground);
    flex: 0 0 auto;
    font-size: 1rem;
    text-align: center;
    transition: none;
    width: 100%;
    z-index: 9999;
  }

  .content {
    align-content: stretch;
    align-items: stretch;
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: 1fr;
    justify-content: stretch;
    margin: 0 auto;
    max-width: 1280px;
    min-height: 3rem;
    padding: 0.5rem 1rem;
  }

  .global { grid-area: global; }
  .copy { grid-area: copy; }
  .price { grid-area: price; }
  .local { grid-area: local; }

  .button {
    align-content: center;
    align-items: center;
    appearance: none;
    background: transparent;
    border-radius: 0.25em;
    border: 0.15em solid var(--color-omnibar-foreground);
    color: var(--color-omnibar-foreground);
    cursor: pointer;
    display: flex;
    font-family: var(--font-family-slab);
    font-size: 1rem;
    justify-content: center;
    line-height: 1;
    padding: 0.5em 0.25em;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 150ms ease;
    user-select: none;
    width: 100%;
  }

  .button:focus {
    box-shadow:
      0 0 12px var(--color-omnibar-accent),
      0 0 1px var(--color-omnibar-accent);
    outline: none;
  }

  .button:hover,
  .button:active {
    background-color: var(--color-omnibar-accent);
    color: var(--color-omnibar-foreground);
  }

  .copy,
  .price {
    align-self: center;
  }

  /** Start of responsive mobile omnibar. Using a media query to scope CSS **/
  @media (max-width: 600px) {
    .content {
      grid-template-columns: 1fr 1fr;
    }

    .mobile-5 { grid-template-areas: "price local"; }
    .mobile-5 > *:not(.price):not(.local) { display: none; }
    .mobile-4 { grid-template-areas: "global local"; }
    .mobile-4 > *:not(.global):not(.local) { display: none; }
    .mobile-3 { grid-template-areas: "global global"; }
    .mobile-3 > *:not(.global) { display: none; }
    .mobile-2 { grid-template-areas: "local local"; }
    .mobile-2 > *:not(.local) { display: none; }
    .mobile-1 { grid-template-areas: "price price"; }
    .mobile-1 > *:not(.price) { display: none; }
    .mobile-0 { grid-template-areas: "copy copy"; }
    .mobile-0 > *:not(.copy) { display: none; }
  }

  /** Start of responsive tablet omnibar **/
  @media (min-width: 600px) and (max-width: 1000px) {
    .content {
      grid-template-columns: 21ch auto 21ch;
    }

    .tablet-6 { grid-template-areas: "price price local"; }
    .tablet-6 > *:not(.price):not(.local) { display: none; }
    .tablet-5 { grid-template-areas: "global price price"; }
    .tablet-5 > *:not(.global):not(.price) { display: none; }
    .tablet-4 { grid-template-areas: "global noop local"; }
    .tablet-4 > *:not(.global):not(.local) { display: none; }
    .tablet-3 { grid-template-areas: "global copy copy"; }
    .tablet-3 > *:not(.global):not(.copy) { display: none; }
    .tablet-2 { grid-template-areas: "price price price"; }
    .tablet-2 > *:not(.price) { display: none; }
    .tablet-1 { grid-template-areas: "copy copy local"; }
    .tablet-1 > *:not(.copy):not(.local) { display: none; }
    .tablet-0 { grid-template-areas: "copy copy copy"; }
    .tablet-0 > *:not(.copy) { display: none; }
  }

  /** Start of responsive desktop omnibar **/
  @media (min-width: 1000px) {
    .content {
      grid-template-columns: 21ch auto 21ch;
    }

    .desktop-1 { grid-template-areas: "global price local"; }
    .desktop-1 > *:not(.global):not(.price):not(.local) { display: none; }
    .desktop-0 { grid-template-areas: "global copy local"; }
    .desktop-0 > *:not(.global):not(.copy):not(.local) { display: none; }
  }

  /** Sticky responsiveness */
  @media (min-height: 400px) {
    header {
      position: sticky;
      top: 0;
    }
  }
</style>
