// plugins/fontawesome.client.ts
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faBars, faXmark, faAngleLeft, faAngleRight)
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
