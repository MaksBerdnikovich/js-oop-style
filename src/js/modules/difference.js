export default class Difference {
    constructor(oldOfficer, newOfficer, elements) {
        this.oldOfficer = document.querySelector(oldOfficer)
        this.newOfficer = document.querySelector(newOfficer)

        try {
            this.oldItems = this.oldOfficer.querySelectorAll(elements)
            this.newItems = this.newOfficer.querySelectorAll(elements)
        } catch (e) {
            console.log(e.message)
        }

        this.oldCounter = 0
        this.newCounter = 0
    }

    trigger(wrapper, items, counter) {
        wrapper.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2){
                items[counter].style.display = 'flex'
                counter++
            } else {
                items[counter].style.display = 'flex'
                items[items.length - 1].remove()
            }
        })
    }

    bindTriggers() {
        this.trigger(this.oldOfficer, this.oldItems, this.oldCounter)
        this.trigger(this.newOfficer, this.newItems, this.newCounter)
    }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none'
                item.classList.add('animate__animated', 'animate__flipInX')
            }
        })
    }

    bindHidden() {
        this.hideItems(this.oldItems)
        this.hideItems(this.newItems)
    }

    init() {
        try {
            this.bindHidden()
            this.bindTriggers()
        } catch (e) {
            console.log(e.message)
        }
    }
}