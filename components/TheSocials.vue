<template>
    <section class="socials" id="socials">
        <div class="container">
            <h1 class="socials__title">
                Соцсети
            </h1>
            <div class="socials__row">
                <a href="https://www.instagram.com/businessflava_studio/" class="socials__row-link">vk
                    <img src="~/assets/img/vk.svg" alt="" class="socials__row-link-pic">
                </a>
                <a href="" class="socials__row-link">instagram
                    <img src="~/assets/img/inst.svg" alt="" class="socials__row-link-pic">
                </a>
                <a href="https://www.behance.net/e04ca0ab" class="socials__row-link">behance
                    <img src="~/assets/img/behance.svg" alt="" class="socials__row-link-pic">
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
    mounted(){
        let socialsTitle = document.querySelector('.socials__title')
        let socialsLink = document.querySelectorAll('.socials__row-link')
        gsap.set(socialsTitle ,{opacity:0, y:50});
        gsap.set(socialsLink ,{opacity:0, y:50});
        gsap.registerPlugin(ScrollTrigger)
        let tl = gsap.timeline()
            .from(socialsTitle,{opacity:0, y:50})
            .to(socialsTitle,{opacity:1,y:0, duration:0.5})
            .from(socialsLink,{opacity:0, y:50})
            .to(socialsLink,{opacity:1,y:0, duration:0.5,stagger:0.3})
        ScrollTrigger.create({
            trigger:socialsLink,
            start: "center center",
            animation:tl
        })
    }
}
</script>