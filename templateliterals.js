// let name = 'bob';
//
// console.log(`hi ${name}`);
//
// let sentence = `This is really a convenience catch.
//     You should will never want to do something.`;
//
// console.log(sentence);


function getReasonCount() { return 1; }

let interpolation = `Give me ${ (getReasonCount() == 1) ? 'one good reason' : 'a few reasons' } to try this.`

console.log(interpolation);
