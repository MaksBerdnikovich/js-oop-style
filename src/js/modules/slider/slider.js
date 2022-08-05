export default class Slider {
    constructor({
        container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '',
        toolboxClass = '',
        animate,
        autoplay,
    } = {}) {
        this.container = document.querySelector(container)

        try {
            this.slides = this.container.children
        } catch (e) {
            console.log(e.message)
        }

        this.btns = document.querySelectorAll(btns)
        this.next = document.querySelector(next)
        this.prev = document.querySelector(prev)
        this.activeClass = activeClass
        this.toolboxClass = toolboxClass
        this.animate = animate
        this.autoplay = autoplay
        this.slideIndex = 1
    }
}