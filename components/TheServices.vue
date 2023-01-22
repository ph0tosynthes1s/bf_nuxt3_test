<template>
    <section class="services" id="services">
        <div class="container">
            <div class="services__base">
                <h1 class="services__base-title">
                    Услуги
                </h1>
                <div class="services__base-row">
                    <div class="services__base-row-element">
                        <h1 class="services__base-row-element-title">Ресерч</h1>
                        <ul class="services__base-row-element-list">
                            <li class="services__base-row-element-list-item">Аналитика</li>
                            <li class="services__base-row-element-list-item">Аудит</li>
                            <li class="services__base-row-element-list-item">Конкурентный анализ</li>
                            <li class="services__base-row-element-list-item">Интервью</li>
                        </ul>
                    </div>
                    <div class="services__base-row-element">
                        <h1 class="services__base-row-element-title">Разработка</h1>
                        <ul class="services__base-row-element-list">
                            <li class="services__base-row-element-list-item">Frontend</li>
                            <li class="services__base-row-element-list-item">Backend</li>
                            <li class="services__base-row-element-list-item">Интеграционные решения </li>
                            <li class="services__base-row-element-list-item">Консалтинг</li>
                            <li class="services__base-row-element-list-item">Системы учета</li>
                            <li class="services__base-row-element-list-item">Базы данных</li>
                        </ul>
                    </div>
                </div>
                <div class="services__base-row">
                    <div class="services__base-row-element">
                        <h1 class="services__base-row-element-title">Дизайн</h1>
                        <ul class="services__base-row-element-list">
                            <li class="services__base-row-element-list-item">UI/UX Дизайн</li>
                            <li class="services__base-row-element-list-item">Прототипирование</li>
                            <li class="services__base-row-element-list-item">Mobile-first подход</li>
                            <li class="services__base-row-element-list-item">Дизайн системы</li>
                            <li class="services__base-row-element-list-item">Айдентика</li>
                        </ul>
                    </div>
                    <div class="services__base-row-element">
                        <h1 class="services__base-row-element-title">Промо-дизайн</h1>
                        <ul class="services__base-row-element-list">
                            <li class="services__base-row-element-list-item">3D Дизайн</li>
                            <li class="services__base-row-element-list-item">Motion-дизайн</li>
                            <li class="services__base-row-element-list-item">Иллюстрации</li>
                            <li class="services__base-row-element-list-item">Технический дизайн</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
    mounted(){
        let servicesTitle = document.querySelector('.services__base-title')
        let servicesElement = document.querySelectorAll('.services__base-row-element')
        let servicesList = document.querySelectorAll('.services__base-row-element-list')
        gsap.set(servicesTitle ,{opacity:0, y:50});
        gsap.set(servicesElement,{opacity:0, y:50});
        gsap.set(servicesList,{opacity:0, y:50});
        gsap.registerPlugin(ScrollTrigger)
        let tl = gsap.timeline()
            .from(servicesTitle ,{opacity:0, y:50})
            .to(servicesTitle ,{opacity:1,y:0, duration:0.5})
            .from(servicesElement,{opacity:0, y:50})
            .to(servicesElement,{opacity:1,y:0, duration:0.5, stagger:0.3})
            .from(servicesList,{opacity:0, y:50})
            .to(servicesList,{opacity:1,y:0, duration:0.5, stagger:0.3})
        ScrollTrigger.create({
            trigger:servicesTitle ,
            start: "center center",
            animation:tl
        })
    }
}
</script>