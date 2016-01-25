/*
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.13.1/TweenLite.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.13.1/TimelineMax.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.13.1/easing/EasePack.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.13.1/plugins/CSSPlugin.min.js"></script>
*/

// USAGE
/*ls_launcher.init({
  id: '#layerslider',
  // Slider options goes here,
  options: {
    showCircleTimer : false,
    skin            : 'v5',
    skinsPath       : '/js/src/layerslider/skins/'
  }
});*/

layerslider = {

  settings: {
    id: null,
    $el: null,
    cssurl:  '/assets/layerslider/layerslider.css',
    ls_core: '/assets/layerslider/layerslider.jquery.js',
    ls_tran: '/assets/layerslider/layerslider.transitions.js',
    // Original LayerSlider options
    options: {

    }
  },

  init: function(options) {

    // Merge object2 into object1
    $.extend(this.settings, options);

    this.settings.$el = $(this.settings.id);
    if(this.settings.$el.length>0) {
      this.post_init();
    }

  },

  post_init: function() {

    // Don't cache calls
    $.ajaxSetup({
      cache: false
    });

    var that = this;

    $.when(
      $.get(this.settings.cssurl),
      $.getScript( '//cdnjs.cloudflare.com/ajax/libs/gsap/1.13.1/TweenLite.min.js' ),
      $.getScript( '//cdnjs.cloudflare.com/ajax/libs/gsap/1.13.1/TimelineMax.min.js' ),
      $.getScript( '//cdnjs.cloudflare.com/ajax/libs/gsap/1.13.1/easing/EasePack.min.js' ),
      $.getScript( '//cdnjs.cloudflare.com/ajax/libs/gsap/1.13.1/plugins/CSSPlugin.min.js' ),
      $.getScript( this.settings.ls_tran ),
      $.getScript( this.settings.ls_core ),
      $.Deferred(function( deferred ){
        $( deferred.resolve );
      })
    ).done(function(){

      // Append CSS allready cached
      var
        lnk = document.createElement('link');
        lnk.type  = 'text/css';
        lnk.rel   = 'stylesheet';
        lnk.media = 'screen';
        lnk.href  = that.settings.cssurl;
      document.getElementsByTagName('head')[0].appendChild(lnk);

      // Start LayerSlider
      that.settings.$el.layerSlider(
        that.settings.options
      );

    });

  }
};
