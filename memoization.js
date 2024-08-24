const calc = n => {
    let sum = 0;
    for(let i=0;i<=n;i++) {
        sum+=i;
    }
    return sum;
}

const memoization = (fnc) => {
    let cache = {};
    return function(...args) {
        const [n] = args; // or n = args[0]
        console.log(n, cache);
        if(n in cache) {
            console.log('2');
            return cache[n];
        } else {
            const sum =  fnc.call(this,n);
            cache[n] = sum;
            return sum;
        }
    }
}


console.time();
const betterFnc = memoization(calc);
console.log(betterFnc(5000));
console.timeEnd();

console.time();
// const betterFnc = memoization(calc);
console.log(betterFnc(5000));
console.timeEnd();