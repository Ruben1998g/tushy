const Sliders = function(){
    
    const adv = new Swiper('.adv__slider', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 5000,
          },
      });

      const menu = new Swiper('.menu__slider', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
      });


      const topSlider = new Swiper('.top-slider__slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoHeight: true,
        pagination: {
          el: '.top-slider__slider .swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 5000,
        },
      });

      const brands = new Swiper('.brands__slider', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
          320: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1000: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 20
          },
        }
      });

      const rew = new Swiper('.reviwes__slider', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.reviwes .swiper-button-next',
          prevEl: '.reviwes .swiper-button-prev',
        },
        
      });

      

      
     
     

};
export default Sliders;