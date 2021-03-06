import GenerateRouteLink from '~mixins/route-link'
import Toggleable from '~mixins/toggleable'
import { Ripple } from '~directives'

export default {
  name: 'v-list-tile',

  mixins: [GenerateRouteLink, Toggleable],

  directives: {
    Ripple
  },

  inheritAttrs: false,

  props: {
    activeClass: {
      type: String,
      default: 'list__tile--active'
    },
    avatar: Boolean
  },

  computed: {
    classes () {
      return {
        'list__tile': true,
        'list__tile--active': this.isActive,
        'list__tile--avatar': this.avatar,
        'list__tile--disabled': this.disabled
      }
    }
  },

  render (h) {
    const { tag, data } = this.generateRouteLink()

    data.attrs = Object.assign({}, data.attrs, this.$attrs)

    return h('li', {
      attrs: {
        disabled: this.disabled
      }
    }, [h(tag, data, [this.$slots.default])])
  }
}
