'use strict';

const lang = document.querySelector('html').lang;

switch (lang) {
  case 'ja':
    document.querySelector('option[value="index.html"]').selected = true;
    break;
  case 'en':
    document.querySelector('option[value="index-en.html"]').selected = true;
    break;
}

document.getElementById('language_form').language_select.onchange = function() {
  location.href = document.getElementById('language_form').language_select.value;
};
