import Slider from "./slider";

export default class SmallSlider extends Slider{
    constructor(container, prev, next, activeClass, animate, autoplay) {
        super(container, prev, next, activeClass, animate, autoplay);
    }

    decorateSlides() {
        Array.from(this.slides).forEach(slide => {
            slide.classList.remove(this.activeClass)
        })

        this.slides[0].classList.add(this.activeClass)
    }

    nextSlide() {
        this.container.appendChild(this.slides[0])
        this.decorateSlides()
    }

    prevSlide() {
        let current = this.slides[this.slides.length - 1]
        this.container.insertBefore(current, this.slides[0])
        this.decorateSlides()
    }

    bindTriggers(){
        this.next.addEventListener('click', () => this.nextSlide())
        this.prev.addEventListener('click', () => this.prevSlide())
    }

    init() {
        try {
            this.bindTriggers()
            this.decorateSlides()

            if (this.autoplay) {
                setInterval(() => this.nextSlide(), 5000);
            }
        } catch (e) {
            console.log(e.message)
        }
    }
}