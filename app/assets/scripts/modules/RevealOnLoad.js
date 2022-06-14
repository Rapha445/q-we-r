class RevealOnLoad {
    constructor(els, time) {
        this.itemsToReveal = els;
        this.timeToReveal = time;
        this.hideInitially();
        this.events();
    }
    events() {
        document.addEventListener('DOMContentLoaded', this.timeOut.bind(this));   
        console.log("event call run")
    }
    timeOut() {
        setTimeout(this.reveal.bind(this), this.timeToReveal);
        console.log("TimeOut run")
    }
    reveal() {
        this.itemsToReveal.forEach(el => {
        el.classList.add("reveal-item--is-visible");
        console.log(document.readyState);
        })
    }
    hideInitially() {
            this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item");
            console.log(document.readyState);
        })
    }
}
export default RevealOnLoad;

