  // Import HTML files
  import indexHTML from '../index.html';
  import loginHTML from '../login.html';
  import chefspaceHTML from '../chefspace.html';
  import contactHTML from '../pages/contact.html';
  import contactUsHTML from '../pages/contactUs.html';
  import GPTHTML from '../pages/GPT.html';
  import GPTProfileHTML from '../pages/GPTprofile.html';
  import thankyouHTML from '../pages/thankyou.html';

  
  
  // Import CSS files
  import chefspaceCSS from '../styles/chefspace.css';
  import contactCSS from '../styles/contact.css';
  import contactUsCSS from '../styles/contactUs.css';
  import GPTCSS from '../styles/GPT.css';
  import loginCSS from '../styles/login.css';
  import navbarCSS from '../styles/navbar.css';
  import styleCSS from '../styles/style.css';
  import swiperCSS from '../styles/swiper-bundle.min.css';
  
  // Import JavaScript files
  import GPTJS from './GPT';
  import logoutJS from './logout';
  import navbarJS from './navbar';
  // import swiperJS from './swiper-bundle.min.js';
  
  // You can use the imported files as needed in your application
  console.log(indexHTML);
  console.log(loginHTML);
  console.log(chefspaceHTML);
  console.log(contactHTML);
  console.log(contactUsHTML);
  console.log(GPTHTML);
  console.log(GPTProfileHTML);
  console.log(thankyouHTML);
  
  console.log(chefspaceCSS);
  console.log(contactCSS);
  console.log(contactUsCSS);
  console.log(GPTCSS);
  console.log(loginCSS);
  console.log(navbarCSS);
  console.log(styleCSS);
  console.log(swiperCSS);
  

  console.log(GPTJS);
  console.log(logoutJS);
  console.log(navbarJS);
  console.log(swiperJS);

const swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 45,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: 'true',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

