<template>
    <section class="main">
        <spline :scene=scene class="main_canvas"/>
        <div class="container">
            <div class="main__middle">
                <div class="main__middle-base">
                    <h1 class="main__middle-base-title">
                        Business <br> 
                        Flava
                    </h1>
                    <span class="main__middle-base-divider"></span>
                    <h2 class="main__middle-base-subtitle">
                        Команда, создающая цифровые продукты <br>
                        высокого уровня
                    </h2>
                </div>
            </div>
            <div class="main__bottom">
                <h3 class="main__bottom-subtitle">
                    DIGITAL PRODUCTION
                </h3>
                <button class="main__bottom-button" aria-label="Scroll">
                    <svg width="43" height="55" viewBox="0 0 43 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="mouse__animation" d="M23 13H20V31H23V13Z" fill="#E770E2"/>
                        <path d="M38.3653 37.4601C38.3653 44.497 31.0537 50.7633 21.3282 50.7633C11.6027 50.7633 4.29112 44.497 4.29112 37.4601V16.9946C4.29112 9.95775 11.6027 3.6914 21.3282 3.6914C31.0537 3.6914 38.3653 9.95775 38.3653 16.9946V37.4601Z" stroke="#D300CB" stroke-opacity="0.56" stroke-width="3"/>
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "spline-vue/v3";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (process.client) {
    gsap.registerPlugin(ScrollToPlugin);
}
  
export default {
    name: 'App',
    components: {
        Spline
    },
    data: () => ({
        scene: 'https://prod.spline.design/6wpWdyJr3akCPTsN/scene.splinecode',
    }),
    mounted(){
        let mainTitle = document.querySelector('.main__middle-base-divider')
        let mouseAnimation = document.querySelector('.mouse__animation')
        let mouseScroll = document.querySelector('.main__bottom-button')
        let aboutTitle = document.querySelector('.about__title')


        gsap.to(mouseAnimation, {
            keyframes: {
                "0%": { y: 0, height:"18px"},
                "50%": { y: 3, height:"5px"},
                "100%": {y: 0, height:"18px"},

                easeEach: "sine.out"
            },
            duration: 2,
            repeat: -1,
            transformOrigin: "center bottom"
        });
        mouseScroll.addEventListener('click', (event) => {
            gsap.to(window, {duration: 0.5, scrollTo:"#about"});
        });
    }
}
</script>