import axios from "axios"

import { API_HOST } from "../env"

const axiosInstance = axios.create({
  baseURL: API_HOST
})

function request(config) {
  return axiosInstance(config)
}

export function createAPIcall(definition) {
  const config = { headers: {}, ...definition }

  if (!config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json"
  }

  return function(params = {}, data, pathParams = []) {
    let localConfig = {
      ...config,
      params,
      data: data ? JSON.stringify(data) : null
    }

    pathParams.forEach(param => {
      localConfig.url = localConfig.url.replace(/:\w+\/?/, `${param}/`)
    })
    return request(localConfig)
  }
}
