/*
 * jQuery autopadding v0.1
 * http://makealone.jp/products/jquery.autopadding
 *
 * Copyright 2014, makealone.jp
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
    $.fn.autopadding = function(options) {
        var undefined;

        // options
        //
        // which_height -- css attribute for set height.
        // offset_height -- gap for bitween element and window.
        //

        // define
        var defaults = {which_height: 'padding-bottom',
                        offset_height: 0
                       };

        var opts = $.extend(defaults, options);

        // functions
        function adjust(self) {
            if (opts.which_height == '') {
                return;
            }
            var window_height = $(window).height();
            self.css(opts.which_height, opts.offset_height + 'px');
            var element_height = self.outerHeight();
            var h = window_height - element_height;
            self.css(opts.which_height, h + 'px');
        };

        // containes all method
        var methods = {
            create: function() {
                return this.each(function(i) {
                    var self = $(this);
                    // init
                    adjust(self);
                    $(window).resize(function(){
                        adjust(self);
                    });
                });
            }
        };

        // do something
        return methods.create.apply(this);
    };

})(jQuery);
