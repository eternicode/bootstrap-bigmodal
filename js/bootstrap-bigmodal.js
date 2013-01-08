/*!
 * Bootstrap BigModal v1.0.0
 *
 * Copyright 2013 Andrew Rowls
 * Licensed under the MIT License
 *
 * https://github.com/eternicode/bootstrap-bigmodal
 */
;(function($){
  function update(modal) {
    modal.find('.modal-body').outerHeight(
      modal.innerHeight() -
      modal.find('.modal-header').outerHeight() -
      modal.find('.modal-footer').outerHeight()
    );
  }

  if ($.fn.modal) {
    var bigmodals = $(),
        modal;

    $(window).resize(function() {
      bigmodals.filter(':visible').each(function() {
        update($(this));
      });
    });

    $.fn.bigmodal = function(option) {
      var ret = $.fn.modal.apply(this, arguments);
      this.addClass('bigmodal');
      bigmodals = bigmodals.add(this);
      this.on('shown', function(){
        update($(this));
      });
      return ret;
    };
  }
  else {
    $.fn.bigmodal = function(option){
      return this;
    };
  }
}(window.jQuery));
