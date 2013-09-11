
checkLandingHeight = ->
  if $("#content-wrap").height() isnt $(window).height() then setLandingHeight()

setLandingHeight = ->
  height = $(window).height()
  $wrap = $("#content-wrap")

  $wrap.css("height", height)
  $("body").css("height", height)
  $wrap.children().css("height", height)

  $landing = $wrap.find("#landing-content > div")
  console.log "landing height: ", $landing.height()
  diff = (height-$landing.height())/2
  $landing.css("padding-top", diff*.6)

setRetinaImage = ->
  $("img.retina").each ->
    $this = $(this)
    if !$this.hasClass("isRetina")
      attr = if $this.attr("data-original") and $this.attr("data-original").length then "data-original" else "src"
      src = $this.attr(attr)
      retinaSrc = src.replace(/\.(\w+)$/, "@2x.$1")
      $this.removeAttr("data-src").attr(attr, retinaSrc).addClass("isRetina") 


$(document).ready ->
  resized = false
  timeout = null

  setLandingHeight()

  landingRefreshTimer = ->
    timeout = setTimeout ->
      checkLandingHeight()
      landingRefreshTimer()
    , 3000

  windowResizeTimer = ->
    setTimeout ->
      if resized
        console.log "resized"
        resized = false
        window.clearTimeout(timeout)
        setLandingHeight()
        landingRefreshTimer()
      windowResizeTimer()
    , 50

  landingRefreshTimer()

  windowResizeTimer()
  $(window).on "resize", ->
    resized = true

  if window.devicePixelRatio >= 2
    setRetinaImage()
