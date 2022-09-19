import axios from "axios"

import { BASE_URL, TIMEOUT } from "./config"

class KJRequest {
  constructor(baseURL, tiemout = 10000) {
    this.instance = axios.create({
      baseURL,
      tiemout,
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get(config) {
    return this.request({ ...config, method: "get" })
  }
  post(config) {
    return this.request({ ...config, method: "post" })
  }
}
export default new KJRequest(BASE_URL, TIMEOUT)
