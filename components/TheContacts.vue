<template>
    <section class="contacts" id="contacts">
        <spline :scene=scene class="contacts_canvas"/>
        <div class="container">
            <h1 class="contacts__title">Контакты</h1>
            <h2 class="contacts__subtitle">Мы до сих пор проверяем почту</h2>
            <a href="mailto:create@businessflava.com" class="contacts__link">create@businessflava.com</a>
        </div>
        <footer class="footer">
            <div class="footer__contacts">
                <a href="tel:+79911592778" class="footer__contacts-link" aria-label="Phone">8 (991) 159-27-78</a>
                <a href="mailto:create@businessflava.com" class="footer__contacts-link" aria-label="Email">create@businessflava.com</a>
            </div>
            <div class="footer__address">
                <p class="footer__address-txt">Россия, г. Москва</p>
            </div>
            <div class="footer__contacts footer__contacts_soc">
                <a href="https://www.behance.net/e04ca0ab" class="footer__contacts-link-icon" aria-label="Behance">
                    <img src="~/assets/img/behance.svg" class="footer__contacts-link-icon-pic">
                </a>
                <a href="" class="footer__contacts-link-icon" aria-label="Vk">
                    <img src="~/assets/img/vk.svg" class="footer__contacts-link-icon-pic">
                </a>
                <a href="https://www.instagram.com/businessflava_studio/" class="footer__contacts-link-icon" aria-label="Instagram">
                    <img src="~/assets/img/inst.svg" class="footer__contacts-link-icon-pic">
                </a>
            </div>
        </footer>
    </section>
    
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "spline-vue/v3";
export default {    
    name: 'App',
    components: {
        Spline
    },
    data: () => ({
        scene: 'https://prod.spline.design/QrYmkVcxnSpoGuoG/scene.splinecode',
    }),
    mounted(){
        let contactsTitle = document.querySelector('.contacts__title')
        let contactsSubtitle = document.querySelector('.contacts__subtitle')
        let contactsLink = document.querySelector('.contacts__link')
        let footerContacts = document.querySelectorAll('.footer__contacts')
        let footerLink = document.querySelectorAll('.footer__contacts-link-icon')
        let footerAddress = document.querySelectorAll('.footer__address')
        gsap.set(contactsTitle,{opacity:0, y:50});
        gsap.set(contactsSubtitle,{opacity:0, y:50});
        gsap.set(contactsLink,{opacity:0, y:50});
        gsap.set(footerContacts,{opacity:0});
        gsap.set(footerLink,{opacity:0});
        gsap.set(footerAddress,{opacity:0});
        gsap.registerPlugin(ScrollTrigger)
        let tl = gsap.timeline()
            .from(contactsTitle ,{opacity:0, y:50})
            .to(contactsTitle ,{opacity:1,y:0, duration:0.5})
            .from(contactsSubtitle,{opacity:0, y:50})
            .to(contactsSubtitle,{opacity:1,y:0, duration:0.5})
            .from(contactsLink,{opacity:0, y:50})
            .to(contactsLink,{opacity:1,y:0, duration:0.5})
            .from(footerContacts,{opacity:0})
            .to(footerContacts,{opacity:1, duration:0.5})
            .from(footerAddress,{opacity:0})
            .to(footerAddress,{opacity:1, duration:0.5, stagger:0.3})
            .from(footerLink,{opacity:0})
            .to(footerLink,{opacity:1, duration:0.5, stagger:0.3})
        ScrollTrigger.create({
            trigger: contactsTitle,
            start: "center center",
            animation:tl
        })
    }
}
</script>