class WatchForHover {
    constructor() {
        this.lastTouchTime = 0;
        this.watchForHover();
    }
    watchForHover() {
        document.addEventListener('touchstart', () => this.updateLastTouchTime())
        document.addEventListener('touchstart', () => this.disableHover())
        document.addEventListener('mousemove', () => this.enableHover())
    }
    updateLastTouchTime() {
        this.lastTouchTime = new Date();
        console.log(this.lastTouchTime);
    }
    disableHover() {
        document.body.classList.remove('hasHover');
    }
    enableHover() {
        if (Date() - this.lastTouchTime < 500) return
        document.body.classList.add('hasHover');
    }
}

export default WatchForHover;