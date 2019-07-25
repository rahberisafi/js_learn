let a = [4, 8, 25, 49, 45];
let b = [ 'isafi', 'rajin', 'tanjir', 'johan' ];

console.log(a[0]);
console.log(a[1]);
console.log(a);
console.log(b);

a[0] = 7;
console.log(a);

//object
console.log(typeof a);
console.log(typeof b);

let c = [4, 'alex', true];
console.log(c);

// undefined
console.log(b[4]);

// actual number, not zero based

console.log(a.length);

// push and pop

a.push(77);
console.log(a);
console.log(a.length);

a.pop();
a.pop();
a.pop();
console.log(a);
console.log(a.length);
