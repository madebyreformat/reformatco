import WebFont from 'webfontloader';
import $ from 'jquery';
import imagesLoaded from 'imagesloaded';
import 'lazysizes';

import "./css/main.css";

let state = {
  navOpen: false,
  fullpage: {},
};

$(() => {

  const isPhone = () => {
    return window.screen.width < 768 && navigator.maxTouchPoints === 1;
  };

  const initSite = () => {
    document.querySelector('.no-js').classList.remove('no-js');
    WebFont.load({
      timeout: 3000,
      custom: {
        families: ['Visuelt']
      },
      active: () => {
        sessionStorage.setItem('fonts', true);
      },
    });

    document.addEventListener('scroll', () => {
      if(window.scrollY > 150){
        $('body').addClass('scrolling');
      }else{
        $('body').removeClass('scrolling');
      }
    });



  }

  const pageMount = () => {

    $('.arrow[aria-role="button"]').on('click', () => {
      const movealong = document.querySelector('#proceed');
      if (movealong) {
        const yCoordinate = movealong.getBoundingClientRect().top + window.pageYOffset;
        // const yOffset = document.getElementById('site-header').offsetHeight;
        const yOffset = 0;

        window.scrollTo({
          top: yCoordinate - yOffset,
          behavior: 'smooth',
        });
      }
    });

    const navbar = document.querySelector('.modal-nav');
    $('.burger').on('click', () => {
      $('body').toggleClass('nav-active');
      if (!state.navOpen) {
        $('.burger').attr('aria-expanded','true');
      } else {
        $('.burger').attr('aria-expanded','false');
      }
      state.navOpen = !state.navOpen;
    });

  }

  initSite();
  pageMount();

});
