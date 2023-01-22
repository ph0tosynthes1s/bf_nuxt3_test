<template>
    <header class="header">
        <div class="header__logo">
            <img src="~assets/img/logo.svg" alt="" class="header__logo-pic">
            <h1 class="header__logo-txt">Business Flava</h1>
        </div>
        <button class="header__button" aria-label="Menu">
            <span class="header__button-element"></span>
            <span class="header__button-element"></span>
            <span class="header__button-element header__button-element_last"></span>
        </button>
        <button class="header__button_closer" aria-label="MenuClose">
            <span class="header__button-element_closer" id="header__button-element_top"></span>
            <span class="header__button-element_closer" id="header__button-element_closer"></span>
            <span class="header__button-element_closer" id="header__button-element_bottom"></span>
        </button>
    </header>
</template>

<script>
import { gsap } from "gsap"
export default {
    mounted(){
        let tl = gsap.timeline();
        let menu = document.querySelector('.menu')
        let headerLogo = document.querySelector('.header__logo')
        let headerTitle = document.querySelector('.header__logo-txt')
        let headerMenu = document.querySelector('.header__button')
        let headerMenuCloser = document.querySelector('.header__button_closer')
        let headerMenuCloserElement = document.querySelector('#header__button-element_closer')
        let headerMenuCloserElementTop = document.querySelector('#header__button-element_top')
        let headerMenuCloserElementBottom = document.querySelector('#header__button-element_bottom')

        headerMenu.addEventListener('click', (event) => {
            tl.to(menu, {opacity:0,display: 'none', position: 'fixed', x:1500, duration:0.2});
            tl.to(headerMenu, {display: 'none'});
            tl.to(headerMenuCloser, {display: 'block',marginTop:'20px', duration:0.2});
            tl.to(menu, {opacity:1,display: 'block', position: 'fixed', x:0, duration:0.2,overflow:"auto"});
            tl.to(document.documentElement, {overflow:"hidden"});
            tl.to(headerMenuCloserElement, {opacity:0,display: 'block',duration:0.2});
            tl.to(headerMenuCloserElementTop, {rotation:45,display: 'block',duration:0.2});
            tl.to(headerMenuCloserElementBottom, {y:-16,rotation:-45,display: 'block',duration:0.2});
            tl.to(headerMenu, {display: 'none'});
        });
        headerMenuCloser.addEventListener('click', (event) => {
            tl.to(menu, {opacity:0,display: 'none', position: 'fixed', x:1500, duration:0.2});
            tl.to(headerMenuCloserElementTop, {rotation:0,display: 'block',duration:0.2});
            tl.to(headerMenuCloserElementBottom, {y:0,rotation:0,display: 'block',duration:0.2});
            tl.to(headerMenuCloserElement, {opacity:1,display: 'block',duration:0.2});
            tl.to(headerMenuCloser, {display: 'none',marginTop:'0px', duration:0.2});
            tl.to(headerMenu, {display: 'block'});
            tl.to(document.documentElement, {overflowY:"visible"});
            tl.to(headerMenu, {display: 'block'});
        });
        
        let elementsArray = document.querySelectorAll(".menu__list-item-link");

            elementsArray.forEach(function(elem) {
                elem.addEventListener('click', function() {
                    tl.to(menu, {opacity:0,display: 'none', position: 'fixed', x:1500, duration:0.2});
                    tl.to(headerLogo,{opacity:1, y:0, duration:0.2});
                    tl.to(headerMenuCloserElementTop, {rotation:0,display: 'block',duration:0.2});
                    tl.to(headerMenuCloserElementBottom, {y:0,rotation:0,display: 'block',duration:0.2});
                    tl.to(headerMenuCloserElement, {opacity:1,display: 'block',duration:0.2});
                    tl.to(headerMenuCloser, {display: 'none'});
                    tl.to(headerMenu, {display: 'block'});
                    gsap.to(document.documentElement, {overflowY:"visible"});
                    tl.to(headerMenu, {display: 'block'});
                });
        });

        let cbpAnimatedHeader = (function() {
            let docElem = document.documentElement,
                header = document.querySelector( '.header' ),
                didScroll = false,
                changeHeaderOn = 50;

            function init() {
                window.addEventListener( 'scroll', function( event ) {
                    if( !didScroll ) {
                        didScroll = true;
                        setTimeout( scrollPage, 10 );
                    }
                }, false );
            }

            function scrollPage() {
                let sy = scrollY();
                if ( sy > changeHeaderOn ) {
                    gsap.to(headerTitle,{opacity:0,  duration:0.5});
                    gsap.to(headerLogo,{marginLeft:"0px",  duration:0.5});
                }
                else {
                    gsap.to(headerTitle,{opacity:1,  duration:0.5});
                    gsap.to(headerLogo,{marginLeft:"65px",  duration:0.5});
                }
                didScroll = false;
            }

            function scrollY() {
                return window.pageYOffset || docElem.scrollTop;
            }

            init();

        })();

    }
}
</script>