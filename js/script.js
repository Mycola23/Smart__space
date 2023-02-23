"use strict";

const burgerMenu = document.querySelector(".header-burger");
const menu = document.querySelector(".header__menu");
const formButton = document.querySelector(".form-main-block__button");

burgerMenu.addEventListener("click", function(event){
    burgerMenu.classList.toggle("burger-active");
    menu.classList.toggle("menu-active");
    document.body.classList.toggle("__active");
    formButton.style.zIndex = '0';

});



// swiper 

const swiper = new Swiper('.slider-main-block', {
    
    loop: true,
  
    // Navigation arrows
    navigation: {
        nextEl: '.body-main-block__arrow.swiper-button-next',
        prevEl: '.body-main-block__arrow.swiper-button-prev',
    },
  
});

const tabNavElements = document.querySelectorAll('.tabs-deals__button');
const tabItames =  document.querySelectorAll(".item-tabs");
const getlleterBody = document.querySelector('.form-content-getletter__body');

document.addEventListener("click", function(e){
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;


    if(targetElement.closest('.tabs-deals__button')){
        tabNavElements.forEach((tabNavElement,index) =>{
            if(tabNavElement.classList.contains('__active')){
                currentActiveIndex = index;
                tabNavElement.classList.remove('__active');
                    
            };
            if (tabNavElement === targetElement){
                newActiveIndex = index;
                console.log(tabNavElement === targetElement);
            }

            
        
        });
        targetElement.classList.add('__active');
        tabItames[currentActiveIndex].classList.remove('__active');
        tabItames[newActiveIndex].classList.add('__active');
    };

    if(targetElement.closest('.form-content-getletter__body')){
        getlleterBody.classList.add("__active");
        console.log("works");
    }
    if(!targetElement.closest('.form-content-getletter__body')){
        getlleterBody.classList.remove("__active");
    };

});










