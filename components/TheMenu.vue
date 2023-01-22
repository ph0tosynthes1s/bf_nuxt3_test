<template>
    <section class="menu">
        <div class="container">
            <img src="~/assets/img/LogoBF.svg" alt="" class="menu__logo">
            <ul class="menu__list">
                <li class="menu__list-item">
                    <nuxt-link class="menu__list-item-link" :to="{hash:'#about'}" :external="true">О нас</nuxt-link>
                </li>
                <li class="menu__list-item">
                    <nuxt-link class="menu__list-item-link" :to="{hash:'#projects'}" :external="true">Работы</nuxt-link>
                </li>
                <li class="menu__list-item">
                    <nuxt-link class="menu__list-item-link" :to="{hash:'#services'}" :external="true">Услуги</nuxt-link>
                </li>
                <li class="menu__list-item">
                    <nuxt-link class="menu__list-item-link" :to="{hash:'#connect'}" :external="true">Оставить заявку</nuxt-link>
                </li>
                <li class="menu__list-item">
                    <nuxt-link class="menu__list-item-link" :to="{hash:'#contacts'}" :external="true">Контакты</nuxt-link>
                </li>
            </ul>
            <div class="menu__footer">
                <div class="menu__footer-contacts">
                    <a href="tel:+79911592778" class="menu__footer-contacts-link">8 (991) 159-27-78</a>
                    <a href="mailto:create@businessflava.com" class="menu__footer-contacts-link">create@businessflava.com</a>
                </div>
                <div class="menu__footer-address">
                    <p class="menu__footer-address-txt">Россия, г. Москва</p>
                </div>
                <div class="menu__footer-contacts menu__footer-contacts_soc">
                    <a href="https://www.behance.net/e04ca0ab" class="menu__footer-contacts-link-icon">
                        <img src="~/assets/img/behance.svg" class="menu__footer-contacts-link-icon-pic">
                    </a>
                    <a href="" class="menu__footer-contacts-link-icon">
                        <img src="~/assets/img/vk.svg" class="menu__footer-contacts-link-icon-pic">
                    </a>
                    <a href="https://www.instagram.com/businessflava_studio/" class="menu__footer-contacts-link-icon">
                        <img src="~/assets/img/inst.svg" class="menu__footer-contacts-link-icon-pic">
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
