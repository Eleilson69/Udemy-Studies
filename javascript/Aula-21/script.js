const rand = (min = 1000, max = 3000) => {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

const f1 = (callBack) => {
    setTimeout(() => {
        console.log('f1');
        if (callBack) callBack();
    }, rand())
}

const f2 = (callBack) => {
    setTimeout(() => {
        console.log('f2');
        if (callBack) callBack();
    }, rand())
}

const f3 = (callBack) => {
    setTimeout(() => {
        console.log('f3');
        if (callBack) callBack();
    }, rand())
}

f1(f1CallBack);

function f1CallBack() {
    f2(f2CallBack)
}

function f2CallBack() {
    f3(f3CallBack)
}

function f3CallBack() {
    console.log('olá mundo!')
}