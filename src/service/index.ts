import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('request vactory')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('request failure')
      return err
    },
    reponseInterceptor: (res) => {
      console.log('response ok')
      return res
    },
    reponseInterceptorCatch: (err) => {
      console.log('response failure')
      return err
    }
  }
})

export default hyRequest
