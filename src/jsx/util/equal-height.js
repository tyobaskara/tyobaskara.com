import React from 'react';
import $ from 'jquery';

export default (container) => {
    setTimeout(() => {
        var maxHeight = 0;
        var count = $(container).length;
    
        $(container).each(function(){
            if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
            // if(!--count) {
            //     console.log('eq height: ', $(this).height());
            // }
        });
    
        $(container).height(maxHeight);
    }, 0);
}
    
// $(window).load(function() {
//   equalheight('.main article');
// });

// $(window).resize(function(){
//   equalheight('.main article');
// });
        
// window.onresize = function(event) {
//     setTimeout(() => {
//         equalheight('.news-wrap .eq-col');
//     }, 1000);
// };
    