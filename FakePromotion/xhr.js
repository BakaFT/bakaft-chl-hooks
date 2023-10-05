export default [{
  matcher: '/lol-ranked/v1/notifications',
  preSend: (XhrRequestConfig) => {},
  postSend: (response) => {
    // tier should be one of
    // ["IRON","BRONZE","SILVER","GOLD","PLATINUM","EMERALD","DIAMOND","MASTER","GRANDMASTER","CHALLENGER"]

    // If you know what im saying. you can have a additional field "division" in
    // the response, should be one of ["I","II","III","IV","V"]
    response.response =
        '[{"tier":"CHALLENGER","displayType":"VIGNETTE","msgId":"12322224","notifyReason":"LEAGUE_PROMOTED","queueType":"RANKED_SOLO_5x5"}]'
  }
}]
