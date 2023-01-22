<template>
        <div class="about" id="about">
            <div class="about__blobs">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" style="opacity: 1;" filter="blur(0px)" transform="rotate(58)">                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style="stop-color: rgb(121, 247, 174);"></stop>                            <stop offset="100%" style="stop-color: rgb(244, 94, 191);"></stop>                        </linearGradient>                        </defs>                                            <path id="blob" fill="url(#gradient)" style="opacity: 1;"><animate attributeName="d" dur="5.5s" repeatCount="indefinite" values="M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z"></animate></path></svg>
            </div>
            <div class="container">
                <h1 class="about__title">
                        О нас
                </h1>
                <div class="about__base">
                    <div class="about__base-element">
                        <div class="about__base-element-header">
                            <h1 class="about__base-element-header-title">
                                Команда
                            </h1>
                            <button class="about__base-element-header-button" id="about__base-element-header-button_team">
                                +
                            </button>
                        </div>
                        <p class="about__base-element-txt non_active" id="about__base-element-header-button_team-txt">
                            Команда "Business Flava" состоит из молодых специалистов различных сфер деятельности, ранее трудившихся над комерческими проектами разных уровней. Наша команда состоит не только из уверенных программистов, но и из дизайнеров и маркетологов, знающих своё дело! 
                        </p>
                    </div>
                    <div class="about__base-element about__base-element-middle">
                        <div class="about__base-element-header">
                            <h1 class="about__base-element-header-title">
                                Принципы
                            </h1>
                            <button class="about__base-element-header-button" id="about__base-element-header-button_princips">
                                +
                            </button>
                        </div>
                        <p class="about__base-element-txt non_active" id="about__base-element-header-button_princips-txt">
                            Главной нашей целью является развитие Вашего бизнеса путём использования наших цифровых продуктов. Мы подберём необходимое для Вас решение, проведём аналитику, составим чёткий, прозрачный и рентабельный план digital-работ по укреплению Вашей позиции на рынке! 
                        </p>
                    </div>
                    <div class="about__base-element">
                        <div class="about__base-element-header">
                            <h1 class="about__base-element-header-title">
                                Возможности
                            </h1>
                            <button class="about__base-element-header-button" id="about__base-element-header-button_possibilities">
                                +
                            </button>
                        </div>
                        <p class="about__base-element-txt non_active" id="about__base-element-header-button_possibilities-txt">
                            Мы пишем не только отличный и оптимизированный код, но также занимаемся созданием дизайн-работ необходимых для Вашего бизнеса, разрабатываем айдентику и продумываем всё до самых мелочей, чтобы продукт выделялся на рынке своим неповторимым имиджем. В это же время отдел наших маркетологов рассматривает стратегии по подъему продаж с помощью увелечения конверсий! 
                        </p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
    mounted(){
        let aboutBlobs = document.querySelector('.about-blobs');
        let aboutTitle = document.querySelector('.about__title')
        let aboutElement = document.querySelectorAll('.about__base-element')
        let aboutElementTxt = document.querySelectorAll('.about__base-element-txt')
        let aboutButtonTeam = document.querySelector('#about__base-element-header-button_team')
        let aboutButtonPrincips = document.querySelector('#about__base-element-header-button_princips')
        let aboutButtonPossibilities = document.querySelector('#about__base-element-header-button_possibilities')
        let aboutButtonTeamTxt = document.querySelector('#about__base-element-header-button_team-txt')
        let aboutButtonPrincipsTxt = document.querySelector('#about__base-element-header-button_princips-txt')
        let aboutButtonPossibilitiesTxt = document.querySelector('#about__base-element-header-button_possibilities-txt')
        gsap.set(aboutTitle,{opacity:0, y:50});
        gsap.set(aboutElement,{opacity:0, y:50});
        gsap.set(aboutElementTxt,{display:'none',opacity:0});
        gsap.set(aboutBlobs,{opacity:0});
        gsap.registerPlugin(ScrollTrigger)
        let tl = gsap.timeline()
            .from(aboutTitle,{opacity:0, y:50})
            .to(aboutTitle,{opacity:1,y:0, duration:0.5})
            .from(aboutElement,{opacity:0, y:50})
            .to(aboutElement,{opacity:1,y:0, duration:0.5, stagger:0.3})
            .from(aboutBlobs,{opacity:0})
            .to(aboutBlobs,{opacity:1,y:0, duration:1})
        ScrollTrigger.create({
            trigger:aboutTitle,
            start: "center center",
            animation:tl,
        })
        aboutButtonTeam.addEventListener('click', (event) => {
            if(aboutButtonTeamTxt.classList.contains('non_active')){
                tl.to(aboutButtonTeam,{rotation:45,opacity:1, duration:0.2});
                tl.to(aboutButtonTeamTxt,{display:'block',opacity:0});
                tl.to(aboutButtonTeamTxt,{opacity:1, duration:0.2});
                aboutButtonTeamTxt.classList.remove('non_active');
                aboutButtonTeamTxt.classList.add('active');
            }
            else if(aboutButtonTeamTxt.classList.contains('active')){
                tl.to(aboutButtonTeam,{rotation:0,opacity:1, duration:0.2});
                tl.to(aboutButtonTeamTxt,{opacity:0, duration:0.2});
                tl.to(aboutButtonTeamTxt,{display:'none',opacity:0});
                aboutButtonTeamTxt.classList.add('non_active');
                aboutButtonTeamTxt.classList.remove('active');

            }
        });
        aboutButtonPrincips.addEventListener('click', (event) => {
            if(aboutButtonPrincipsTxt.classList.contains('non_active')){
                tl.to(aboutButtonPrincips,{rotation:45,opacity:1, duration:0.2});
                tl.to(aboutButtonPrincipsTxt,{display:'block',opacity:0});
                tl.to(aboutButtonPrincipsTxt,{opacity:1, duration:0.2});
                aboutButtonPrincipsTxt.classList.remove('non_active');
                aboutButtonPrincipsTxt.classList.add('active');
            }
            else if(aboutButtonPrincipsTxt.classList.contains('active')){
                tl.to(aboutButtonPrincips,{rotation:0,opacity:1, duration:0.2});
                tl.to(aboutButtonPrincipsTxt,{opacity:0, duration:0.2});
                tl.to(aboutButtonPrincipsTxt,{display:'none',opacity:0});
                aboutButtonPrincipsTxt.classList.add('non_active');
                aboutButtonPrincipsTxt.classList.remove('active');

            }
        });
        aboutButtonPossibilities.addEventListener('click', (event) => {
            if(aboutButtonPossibilitiesTxt.classList.contains('non_active')){
                tl.to(aboutButtonPossibilities,{rotation:45,opacity:1, duration:0.2});
                tl.to(aboutButtonPossibilitiesTxt,{display:'block',opacity:0});
                tl.to(aboutButtonPossibilitiesTxt,{opacity:1, duration:0.2});
                aboutButtonPossibilitiesTxt.classList.remove('non_active');
                aboutButtonPossibilitiesTxt.classList.add('active');
            }
            else if(aboutButtonPossibilitiesTxt.classList.contains('active')){
                tl.to(aboutButtonPossibilities,{rotation:0,opacity:1, duration:0.2});
                tl.to(aboutButtonPossibilitiesTxt,{opacity:0, duration:0.2});
                tl.to(aboutButtonPossibilitiesTxt,{display:'none',opacity:0});
                aboutButtonPossibilitiesTxt.classList.add('non_active');
                aboutButtonPossibilitiesTxt.classList.remove('active');

            }
        });
    }
}
</script>