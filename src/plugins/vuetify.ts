import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        accent: '#c90075',
        primary: '#2c1459',
        secondary: '#571b7e',
        background: '#ceb6fc',
      },
    },
  },
})
