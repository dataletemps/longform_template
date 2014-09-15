/*!
 * jquery.scrolldepth.js | v0.4
 * Copyright (c) 2013 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
!function(e,n,t){"use strict";var r={elements:[],minHeight:0,percentage:!0,testing:!1},a=e(n),l=[];e.scrollDepth=function(i){function o(n,t,r){i.testing?e("#console").html(n+": "+t):("undefined"!=typeof ga&&(ga("send","event","Scroll Depth",n,t,1,{nonInteraction:1}),arguments.length>2&&ga("send","timing","Scroll Depth",n,r,t)),"undefined"!=typeof _gaq&&(_gaq.push(["_trackEvent","Scroll Depth",n,t,1,!0]),arguments.length>2&&_gaq.push(["_trackTiming","Scroll Depth",n,r,t,100])),"undefined"!=typeof dataLayer&&(dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:n,eventLabel:t,eventValue:1,eventNonInteraction:!0}),arguments.length>2&&dataLayer.push({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:n,eventLabel:t,eventTiming:r})))}function c(e){return{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-1}}function u(n,t,r){e.each(n,function(n,a){-1===e.inArray(n,l)&&t>=a&&(o("Percentage",n,r),l.push(n))})}function s(n,t,r){e.each(n,function(n,a){-1===e.inArray(a,l)&&e(a).length&&t>=e(a).offset().top&&(o("Elements",a,r),l.push(a))})}function g(e,n){var t,r,a,l=null,i=0,o=function(){i=new Date,l=null,a=e.apply(t,r)};return function(){var c=new Date;i||(i=c);var u=n-(c-i);return t=this,r=arguments,0>=u?(clearTimeout(l),l=null,i=c,a=e.apply(t,r)):l||(l=setTimeout(o,u)),a}}var h=+new Date;i=e.extend({},r,i),e(t).height()<i.minHeight||(o("Percentage","Baseline"),a.on("scroll.scrollDepth",g(function(){var r=e(t).height(),o=n.innerHeight?n.innerHeight:a.height(),g=a.scrollTop()+o,p=c(r),f=+new Date-h;return l.length>=4+i.elements.length?(a.off("scroll.scrollDepth"),void 0):(i.elements&&s(i.elements,g,f),i.percentage&&u(p,g,f),void 0)},500)))}}(jQuery,window,document);