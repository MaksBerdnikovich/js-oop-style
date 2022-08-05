import Slider from "./slider";

export default class MainSlider extends Slider{
    constructor(btns, toolboxClass, prev, next) {
        super(btns, toolboxClass, prev, next);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        // Rotate slides
        Array.from(this.slides).forEach(slide => {
            slide.style.display = 'none';
            slide.classList.add('animate__animated', 'animate__faster')
        });
        this.slides[this.slideIndex - 1].style.display = 'block';
        this.slides[this.slideIndex - 1].classList.add('animate__fadeIn')

        // Show hanson block
        try {
            this.hanson.style.display = 'none'
            this.hanson.classList.add('animate__animated')

            if (this.slideIndex === 3) {
                setTimeout(() => {
                    this.hanson.style.display = 'block'
                    this.hanson.classList.add('animate__slideInUp')
                }, 3000)
            } else {
                this.hanson.classList.remove('animate__slideInUp')
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    navVerticalTrigger() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.plusSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });
    }

    navHorizontalTrigger() {
        const triggerEvent = (btn, n) => {
            try {
                const btnClass = btn.getAttribute('class')
                document.querySelectorAll(btnClass).forEach(item => {
                    item.addEventListener('click', (e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        this.plusSlides(n);
                    })
                })
            } catch (e) {
                console.log(e.message)
            }
        }

        triggerEvent(this.prev, -1)
        triggerEvent(this.next, 1)
    }

    bindTriggers() {
        this.navVerticalTrigger()
        this.navHorizontalTrigger()
    }

    init() {
        if (this.container) {
            try {
                this.hanson = document.querySelector(this.toolboxClass)
            } catch (e) {
                console.log(e.message)
            }

            this.showSlides(this.slideIndex);
            this.bindTriggers()
        }
    }
}