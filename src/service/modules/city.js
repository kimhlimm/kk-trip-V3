import kjRequest from "../request"

export function getCityAll() {
  return kjRequest.get({
    url: "/city/all",
  })
}
