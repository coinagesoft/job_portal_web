

/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
t.data("counterup-nums",e);t.text("0");var c=function(){var n=t.data("counterup-nums");if(n&&n.length){t.text(n.shift());if(n.length){setTimeout(t.data("counterup-func"),r.delay);return;}}t.text(i);delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);


