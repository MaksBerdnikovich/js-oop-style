import Video from "./modules/video";
import MainSlider from "./modules/slider/slider-main";
import SmallSlider from "./modules/slider/slider-small";
import Difference from "./modules/difference";
import Form from "./modules/form";
import ShowInfo from "./modules/showinfo";
import Download from "./modules/download";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const homeSlider = new MainSlider({
        container: '.page',
        btns: '.next',
        toolboxClass: '.hanson'
    })
    homeSlider.init()

    const moduleSlider = new MainSlider({
        container: '.moduleapp',
        btns: '.next',
        prev: '.prevmodule',
        next: '.nextmodule',
    })
    moduleSlider.init()

    const showupSlider = new SmallSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        autoplay: true
    })
    showupSlider.init()

    const modulesSlider = new SmallSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        autoplay: true
    })
    modulesSlider.init()

    const feedSlider = new SmallSlider({
        container: '.feed__slider',
        next: '.feed__slider-nav .slick-next',
        prev: '.feed__slider-nav .slick-prev',
        activeClass: 'feed__item-active',
        autoplay: true
    })
    feedSlider.init()

    new Video('.showup .play', '.overlay').init()
    new Video('.module__video-item .play', '.overlay').init()

    new Difference('.officerold', '.officernew', '.officer__card-item').init()
    new ShowInfo('.module__info-show .plus').init()
    //new Download('.download').init()
    new Form('.form').init()
})