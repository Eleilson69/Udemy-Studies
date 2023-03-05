// let i = 0;

// while (i <= 10) {
//     i++
//     console.log(i)
// }

const random = (min, max) => {
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
}

const min = 1;
const max = 50;

let rand = random(min, max)

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand)
}
// do {
//     rand = random(min, max);
//     console.log(rand)
// } while ((rand !== 10))