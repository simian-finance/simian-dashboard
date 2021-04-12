import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)
const primary = '#2c1459'
const secondary = '#3D3D3D'
const accent = '#c90075'
const primaryDark = '#190b33'
const primaryLight = '#ceb6fc'

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        accent: accent,
        primary: primary,
        secondary: secondary,
        background: primaryDark,
      },
      light: {
        accent: accent,
        primary: primary,
        secondary: secondary,
        background: primaryLight,
      },
    },
  },
})
