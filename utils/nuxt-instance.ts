// Aqui nesse arquivo separamos o Axios do nuxt para podermos usa-lo inicializando-o com o plugin accessor

import { NuxtAxiosInstance } from '@nuxtjs/axios'

// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}
   
export { $axios }