import Vue from 'vue'
import VueGtag from 'vue-gtag'
import router from '../router'

// Google Analytics configuration
Vue.use(VueGtag, {
  config: {
    id: 'G-SYX3RD9GH7', // Your Google Analytics Measurement ID
    params: {
      send_page_view: true // Automatically send page views
    }
  },
  appName: 'Piero Gallo Portfolio', // Your application name
  pageTrackerScreenviewEnabled: true,
  // Optional: Enable more features as needed
}, router)
