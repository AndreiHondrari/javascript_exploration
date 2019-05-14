'use strict';

import {p} from "./ut";

p("promise\n")

p("Basic promise")

function getMyPromise(
    name: string,
    {
        shouldResolve=true,
        shouldRejectManually=false,
        shouldRejectException=false,
        delay=0
    }: {
        shouldResolve?: boolean,
        shouldRejectManually?: boolean,
        shouldRejectException?: boolean,
        delay?: number
    } = {}) {

    return new Promise((resolve, reject) => {
        console.log(`initiating ${name} ...`);

        if (shouldRejectManually)
            setTimeout(function() {
                reject([name, delay, `manual rejection`]);
            }, delay)

        if (shouldRejectException)
            throw [name, delay, `exceptional rejection`];


        if (shouldResolve)
            setTimeout(function() {
                resolve([name, delay]);
            }, delay);

    });
};

// shouldn't resolve
p("promise1 without resolve")
let promise1 = getMyPromise("promise1", {shouldResolve: false});
promise1.then(() => {
    console.log("promise1 finalized!");
});

p("promise2 with resolve")
// should resolve by default
let promise2 = getMyPromise("promise2");
promise2.then(() => {
    console.log("promise2 finalized!");
});

p("promise3 with manual reject")
// should resolve by default
let promise3 = getMyPromise("promise3", {shouldRejectManually: true});

promise3.then(() => {
    console.log("promise3 finalized!");
})
.catch((err) => {
    console.log(`promise3 rejected! err: ${err}\n`);
});

p("promise4 with manual reject")
// should resolve by default
let promise4 = getMyPromise("promise4", {shouldRejectException: true});

promise4.then(() => {
    console.log("promise4 finalized!");
})
.catch((err) => {
    console.log(`promise4 rejected! err: ${err}`);
});

p("promises with delays")

function promiseResolve(data) {
    let [name, delay] = data;
    console.log(`${name}[${delay}ms]: resolved!`);
};

function promiseReject(data) {
    let [name, delay, error] = data;
    console.log(`${name}[${delay}ms] | ${error}: rejected!`);
};

getMyPromise("dp1", {delay: 500}).then(promiseResolve);
getMyPromise("dp2", {delay: 500}).then(promiseResolve);
getMyPromise("dp3", {delay: 600}).then(promiseResolve);
getMyPromise("dp4", {delay: 600, shouldRejectManually: true}).catch(promiseReject);
getMyPromise("dp5", {delay: 700, shouldRejectException: true}).catch(promiseReject);  // -> will fire fast because exceptions are not timed

p("...after calls");
setTimeout(() => {p("...after quick promise resolves (wait for the ones with delays!)");}, 0);
