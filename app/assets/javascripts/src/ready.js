// — FUNCIONES LOCALES A ESTE SITE
$(document).ready(function() {
	// la magia aquí

  // Fancybox -----------------------
  $('a.fancybox').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    nextEffect  : 'fade',
    prevEffect  : 'fade',
    scrolling   : 'no',
    helpers : {
      title: {
        type: 'inside'
      }// , // Problema del fondo que se mueve
      // overlay : {
      //   locked : false
      // }
    },
    afterLoad: function(){
      var
        t = '<p>';
      if (this.title.length > 1) {
        t = t + this.title;
      }
      if (this.title.length > 1 && this.group.length > 1) {
        t = t + '<br/>';
      }
      if (this.group.length > 1) {
        t = t + '<span> Imagen ' + (this.index+1) + ' de ' + this.group.length + '<span>';
      }
      this.title = t + '</p>';
    }
  });

  // JQuery Scroll To Top ---------------------------------
  $(function () {
    // hide #back-top first
    var afa = $("a.a_arriba_floater");
    afa.addClass('invisible');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        afa.show().removeClass('invisible');
      } else {
        afa.addClass('invisible');
      }
    });
    // scroll body to 0px on click
    afa.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });

  // Layer slider
  // Original call
  /*$('#layerslider').layerSlider({
    // Slider options goes here,
    showCircleTimer : false,
    skin            : 'v5',
    skinsPath       : '/js/src/layerslider/skins/'
  });*/

  layerslider.init({
    id: '#layerslider',
    // Slider options goes here,
    options: {
      showCircleTimer : false,
      skin            : 'v5',
      skinsPath       : '/assets/layerslider/skins/'
    }
  });

  // External links ---------------------------------------
  externalLinks();

  // PilarVara custom code
  PV.autohidemenu();

  // Responsive

  $('#show-responsive-nav').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('slide-menu-open');

    if ($('body').hasClass('slide-menu-open')) {
      $('<div id="overlay-contents"></div>').on('click touchstart', function(e) {
        e.preventDefault();
        $('body').removeClass('slide-menu-open');
        $(this).remove();
      }).appendTo('body');
    } else {
      $('#overlay-contents').remove();
    }
  });

  MQBE.onenter_mobile = function() {
    $('#submenu-to-select').ul2select({
      active_class: 'current',
      custom_events: {
        'change': function(){
          document.location.href = $(this).find('option:selected').val();
        }
      }
    });
  };

  MQBE.onenter_tablet = function() {
    $('#submenu-to-select').ul2select({
      active_class: 'current',
      custom_events: {
        'change': function(){
          document.location.href = $(this).find('option:selected').val();
        }
      }
    });
  };

  MQBE.onenter_desktop = function() {
    $('#submenu-to-select').ul2select('revert');
  };

  MQBE.init();

});
