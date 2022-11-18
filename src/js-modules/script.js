import Swiper from './modules/swip';

import Sliders from './modules/sliders';

import Menu from './modules/menu';

document.addEventListener('DOMContentLoaded', ()=>{
    try{
        Swiper();
    }catch(error){};

    try{
        Sliders();
    }catch(error){};

    try{
        Menu();
    }catch(error){};

});


