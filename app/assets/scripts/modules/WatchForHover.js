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
    enableHover() {
        if (this.date - this.lastTouchTime < 500) return
        document.body.classList.add('hasHover');
    }
    disableHover() {
        document.body.classList.remove('hasHover');
    }
    updateLastTouchTime() {
        lastTouchTime = this.date;
    }
}

export default WatchForHover;