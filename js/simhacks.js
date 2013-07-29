$(function() {
    // back to top
    setTimeout(function () {
      var $sideBar = $('.bs-sidebar');

      var navHeight = $('.navbar').outerHeight(true) + 10;

      $(document.body).scrollspy({
        target: '.bs-sidebar',
        offset: navHeight
      });

      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top
            var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
            var navOuterHeight = $('.bs-docs-nav').height()

            return (this.top = offsetTop - navOuterHeight - sideBarMargin)
          }
        , bottom: function () {
            return (this.bottom = $('.bs-footer').outerHeight(true))
          }
        }
      })
    }, 100)

    setTimeout(function () {
      $('.bs-top').affix()
    }, 100)

});