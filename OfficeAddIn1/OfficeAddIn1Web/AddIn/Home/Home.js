/// <reference path="../App.js" />

(function () {
    "use strict";


    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            //$('#percent-calculate').click(getNumberOfWords);
            seeIfDisable();
        });
    };

    jQuery(document).ready(function () {
        jQuery('.tabs .tab-links a').on('click', function (e) {
            var currentAttrValue = jQuery(this).attr('href');

            // Show/Hide Tabs
            jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

            // Change/remove current tab to active
            jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

            e.preventDefault();
        });
    });

})();