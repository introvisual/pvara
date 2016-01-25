;var PV = PV || {

  init: function() {

  },

  autohidemenu: function() {
    var
      $menu = $('#menu'),
      $1st  = $menu.find('> ul > li'),
      $2nd  = $menu.find('> ul > li > ul'),
      delay = 1500;

    var
      sub;

    $1st.hover(function() {
      $2nd.hide();
      sub = $(this).find('> ul');
      if (sub.length > 0) {
        if(sub[0].hasOwnProperty("timer")){
          clearTimeout(sub[0].timer);
        }
        sub.show();
      }
    }, function() {
      sub = $(this).find('> ul');
      if (sub.length > 0) {
        if(sub[0].hasOwnProperty("timer")){
          clearTimeout(sub[0].timer);
        }
        sub[0].timer = setTimeout(function(){
          sub.hide();
        },delay);
      }
    });

  }

};
