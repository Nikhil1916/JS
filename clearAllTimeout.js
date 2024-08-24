function ownSetTimeout() {
    timeOutIds = [];

    const orignalTimeoutFnc = window.setTimeout;

    this.setTimeout = function(cb, delay) {
        const id = orignalTimeoutFnc(cb, delay);
        timeOutIds.push(id);
        return id;
    }

    this.clearAllTimeout = function() {
        while(timeOutIds.length) {
            clearTimeout(timeOutIds.pop());
        }
    }

    // this will be returned and timeout id array we will get as closure
}

const timerFnc = new ownSetTimeout();
console.log(timerFnc);

timerFnc.setTimeout(() => {console.log("hello")}, 2000);
timerFnc.setTimeout(() => {console.log("hello1")}, 3000);
timerFnc.setTimeout(() => {console.log("hello2")}, 4000);
timerFnc.setTimeout(() => {console.log("hello3")}, 5000);

timerFnc.setTimeout(() => {timerFnc.clearAllTimeout()},3000);

console.log(timerFnc);