const Menu = function(){
    const menuSidebarBottomOpeMoreTrigger = document.querySelector('.js__menu-sidebar-bottom-open-more');

    const menuOpenTrigger = document.querySelector('.js__menu-open-trigger');

    const menuBlock = document.querySelector('.js__menu-sidebar');

    const cartBlock = document.querySelector('.js__menu-slidebar-cart');
    
    const menuCloseTrigger = document.querySelector('.js__menu-sidebar-prev');

    const cartCloseTrigger = document.querySelector('.js__menu-sidebar-prev-cart');

    const cartOpenTriggers = document.querySelectorAll('.js__menu-cart-trigger');

    menuSidebarBottomOpeMoreTrigger.addEventListener('click', (e)=>{
        e.preventDefault();
        menuSidebarBottomOpeMoreTrigger.classList.toggle('menu__sidebar-bottom-open-more--open');
    });

    menuOpenTrigger.addEventListener('click', (e)=>{
        e.preventDefault();
        menuBlock.classList.add('menu__sidebar-bottom-open-more--show');
    });

    cartOpenTriggers.forEach((cartOpenTrigger)=>{
        cartOpenTrigger.addEventListener('click', (e)=>{
            e.preventDefault();
            cartBlock.classList.add('menu__slidebar-cart-wrapper--show');
        });
    });

    

    menuCloseTrigger.addEventListener('click', (e)=>{
        e.preventDefault();
        menuBlock.classList.remove('menu__sidebar-bottom-open-more--show');
    });

    cartCloseTrigger.addEventListener('click', (e)=>{
        e.preventDefault();
        cartBlock.classList.remove('menu__slidebar-cart-wrapper--show');
    });

    

    menuBlock.addEventListener('click', (e)=>{
        e.preventDefault();
        if(e.target.classList.contains('menu__sidebar-wrapper')){
            menuBlock.classList.remove('menu__sidebar-bottom-open-more--show');
        }
       
    });

    cartBlock.addEventListener('click', (e)=>{
        e.preventDefault();
        if(e.target.classList.contains('menu__slidebar-cart-wrapper')){
            cartBlock.classList.remove('menu__slidebar-cart-wrapper--show');
        }
       
    })

    window.addEventListener('keyup', (e)=>{
        if(e.code == "Escape"){
            menuBlock.classList.remove('menu__sidebar-bottom-open-more--show');
        }
    });

    window.addEventListener('keyup', (e)=>{
        if(e.code == "Escape"){
            cartBlock.classList.remove('menu__slidebar-cart-wrapper--show');
        }
    });



};
export default Menu;