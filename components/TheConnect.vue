<template>
    <section class="connect" id="connect">
        <div class="container">
            <p class="connect__success">Ваша заявка успешно отправлена! Наш менеджер скоро свяжется с вами!</p>
            <p class="connect__error">С отправкой заявки что-то пошло не так... Свяжитесь с нами напрямую!</p>
            <h1 class="connect__title">Оставить заявку</h1>
            <form @submit.prevent="submit(form)" class="connect__form">
                <input type="text" class="connect__form-input" required v-model="form.name" name="name" placeholder="Имя">
                <input type="text" class="connect__form-input" required  v-model="form.email" name="email" placeholder="E-mail">
                <input type="text" class="connect__form-input" required  v-model="form.phone" name="phone" placeholder="Телефон">
                <input type="text" class="connect__form-input" required  v-model="form.project" name="project" placeholder="*О проекте">
                <div class="connect__form-bottom">
                    <button type="submit"  class="connect__form-bottom-button">Отправить</button>
                </div>
                <p class="connect__form-disclaimer">
                    Нажимая кнопку, вы соглашаетесь с нашей политикой в отношении обработки
                    <a href="/static/policy.pdf" class="connect__form-disclaimer-link" download="">персональных данных</a>
                </p>
            </form>
        </div>
    </section>
</template>


<script setup>
    const form = ref({
        name: '',
        email:'',
        phone: '',
        project: ''
    });
    async function submit(form) {
        await $fetch('https://businessflava.com/api/contact',{
            method: 'POST',
            body: form
        }).then(() =>{
            let connectForm = document.querySelector('.connect__form')
            let connectSuccess = document.querySelector('.connect__success')
            let tl = gsap.timeline()
            tl.from(connectForm,{opacity:1})
            tl.to(connectForm,{opacity:0,duration:0.5})
            tl.from(connectSuccess,{display:'none',opacity:0, y:50})
            tl.to(connectSuccess,{display:'block',position:'absolute',opacity:1, y:0})
            this.form = {
                name: '',
                email:'',
                phone: '',
                project: ''
            }.catch(() =>{
                let connectError = document.querySelector('.connect__error')
                tl.from(connectError,{display:'none',opacity:0, y:50})
                tl.to(connectError,{display:'block',position:'absolute',opacity:1, y:0})
            })
        })
    }

</script>


<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from 'axios';


export default {
    mounted(){
        let connectTitle = document.querySelector('.connect__title')
        let connectInput = document.querySelectorAll('.connect__form-input')
        let connectButton = document.querySelectorAll('.connect__form-bottom-button')
        let connectDisclaimer = document.querySelector('.connect__form-disclaimer')
        gsap.set(connectTitle,{opacity:0, y:50});
        gsap.set(connectInput,{opacity:0, y:50});
        gsap.set(connectButton,{opacity:0, y:50});
        gsap.set(connectDisclaimer,{opacity:0, y:50});
        gsap.registerPlugin(ScrollTrigger)
        let tl = gsap.timeline()
            .from(connectTitle,{opacity:0, y:50})
            .to(connectTitle,{opacity:1,y:0, duration:0.5})
            .from(connectInput,{opacity:0, y:50})
            .to(connectInput,{opacity:1,y:0, duration:0.5, stagger:0.3})
            .from(connectButton,{opacity:0, y:50})
            .to(connectButton,{opacity:1,y:0, duration:0.5, stagger:0.3})
            .from(connectDisclaimer,{opacity:0, y:50})
            .to(connectDisclaimer,{opacity:1,y:0, duration:0.5, stagger:0.3})
        ScrollTrigger.create({
            trigger: connectTitle,
            start: "center center",
            animation:tl
        })
    },

}
</script>
