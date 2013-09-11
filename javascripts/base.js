(function() {
  var handleImageSizing, imageLoad, setImageSize;

  handleImageSizing = function($image) {
    var $article, resizing;
    $article = $("div.article-wrap");
    setImageSize($image, $article);
    resizing = false;
    $(window).resize(function() {
      return resizing = true;
    });
    return setInterval(function() {
      if (resizing) {
        setImageSize($image, $article);
        return resizing = false;
      }
    }, 100);
  };

  setImageSize = function($image, $article) {
    if ($image.height() < $image.parent().height()) {
      $image.parent().css("height", String($image.height()) + "px");
      return $article.css("margin-top", String($image.height()) + "px");
    } else {
      $image.parent().css("height", "500px");
      return $article.css("margin-top", "500px");
    }
  };

  imageLoad = function(self, cb) {
    var $this, img, src;
    $this = $(self);
    src = $this.attr("data-src");
    if (src) {
      img = new Image();
      img.style.display = "none";
      img.onload = function() {
        var $image;
        $image = $(this);
        $image.addClass("main-image").fadeIn(1000);
        $this.remove();
        if (cb) {
          return cb($image);
        }
      };
      $this.parent().append(img);
      return img.src = src;
    }
  };

  $(document).ready(function() {
    var $imageWrap;
    $imageWrap = $("span.main-image");
    return $imageWrap.each(function() {
      return imageLoad(this, function($image) {
        return handleImageSizing($image);
      });
    });
  });

}).call(this);

(function() {
  var checkLandingHeight, setLandingHeight, setRetinaImage;

  checkLandingHeight = function() {
    if ($("#content-wrap").height() !== $(window).height()) {
      return setLandingHeight();
    }
  };

  setLandingHeight = function() {
    var $landing, $wrap, diff, height;
    height = $(window).height();
    $wrap = $("#content-wrap");
    $wrap.css("height", height);
    $("body").css("height", height);
    $wrap.children().css("height", height);
    $landing = $wrap.find("#landing-content > div");
    console.log("landing height: ", $landing.height());
    diff = (height - $landing.height()) / 2;
    return $landing.css("padding-top", diff * .6);
  };

  setRetinaImage = function() {
    return $("img.retina").each(function() {
      var $this, attr, retinaSrc, src;
      $this = $(this);
      if (!$this.hasClass("isRetina")) {
        attr = $this.attr("data-original") && $this.attr("data-original").length ? "data-original" : "src";
        src = $this.attr(attr);
        retinaSrc = src.replace(/\.(\w+)$/, "@2x.$1");
        return $this.removeAttr("data-src").attr(attr, retinaSrc).addClass("isRetina");
      }
    });
  };

  $(document).ready(function() {
    var backgroundImageLoad, landingRefreshTimer, resized, timeout, windowResizeTimer;
    resized = false;
    timeout = null;
    backgroundImageLoad = function($this) {
      var img, src;
      src = "/img/landing/background.jpg";
      if (src) {
        img = new Image();
        img.style.display = "none";
        img.onload = function() {
          $this.fadeIn(1000);
          return img.remove();
        };
      }
      return img.src = src;
    };
    backgroundImageLoad($("#content-wrap"));
    setLandingHeight();
    landingRefreshTimer = function() {
      return timeout = setTimeout(function() {
        checkLandingHeight();
        return landingRefreshTimer();
      }, 3000);
    };
    windowResizeTimer = function() {
      return setTimeout(function() {
        if (resized) {
          console.log("resized");
          resized = false;
          window.clearTimeout(timeout);
          setLandingHeight();
          landingRefreshTimer();
        }
        return windowResizeTimer();
      }, 50);
    };
    landingRefreshTimer();
    windowResizeTimer();
    $(window).on("resize", function() {
      return resized = true;
    });
    if (window.devicePixelRatio >= 2) {
      return setRetinaImage();
    }
  });

}).call(this);
