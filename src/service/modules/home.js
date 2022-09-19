import kjRequest from "../request"

export function getHomeHotSuggests() {
  return kjRequest.get({
    url: "/home/hotSuggests",
  })
}
