class RevealOnLoad {
    constructor(els) {
        this.itemsToReveal = els;
        this.hideInitially();
        this.events();
    }
    events() {
        document.addEventListener('DOMContentLoaded', this.reveal);   
    }
    reveal(e) {
        var that = this;
        setTimeout(function() {
            that.itemsToReveal.forEach(el => {
                el.classList.add("reveal-item--is-visible");
                console.log(document.readyState);
            })
        }, 2000);
    }
    hideInitially() {
            this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item");
            console.log(document.readyState);
        })
    }
}
export default RevealOnLoad;

