require('purecss/build/pure.css')

require('font-awesome/css/font-awesome.css')
require('@typopro/web-raleway/TypoPRO-Raleway.css')
require('@typopro/web-open-sans/TypoPRO-OpenSans.css')

require('./css/blackburn.css')
require('./css/side-menu.css')
require('./css/grids-responsive.css')

var ui = require('./js/ui.js')
document.addEventListener('DOMContentLoaded', ui, false);
