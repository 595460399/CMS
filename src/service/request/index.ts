import axios from 'axios'
import { AxiosInstance } from 'axios'
import { HYRequestInterceptors, HYRequestConfig } from './types'
class HYRequest {
  // request() {}
  // get() {}
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.reponseInterceptor,
      this.interceptors?.reponseInterceptorCatch
    )
  }
  request(config: HYRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HYRequest
