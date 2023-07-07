let son = 5
let a = -11
let b = 10
let c = -12
let d = 25
let A = 15
let B = 12
//test 1
if (son > 0) {
  son += 1;
}

console.log(son);

//test 2

if (son > 0) {
  son += 1;
} else {
  son -= 2;
}

console.log("Natija: " + son);

//test 3
let mus = 0
let manfy = 0

if (a >= 0) {
  mus++
} else {
  manfy++
}

if (b >= 0) {
  mus++
} else {
  manfy++
}

if (c >= 0) {
  mus++
} else {
  manfy++
}
console.log(mus);
console.log(manfy);

//test 4
let bigNumber = 0
if (a > b) {
  bigNumber = a
} else {
  bigNumber = b
}

console.log(bigNumber);

//test 5
let littleNumber = 0
if (a > b) {
  littleNumber = 2
} else {
  littleNumber = 1
}

console.log(littleNumber);

//test 6
if (a < b) {
  console.log(b, a);
} else {
  console.log(a, b);
}

//test 7
// if (a > b) {
//   let number = a
//   a = b
//   b = number
// }

// console.log(a);
// console.log(b);

// //test 8
// if (A != B) {
//   let yigindi = A + B
//   // console.log(yigindi);
//   A = B = yigindi
// } else {
//   A = B = 0
// }

// console.log(A);
// console.log(B);

//test 9
// let yigindi = 0
// if (a != b) {
//   if (a > b) {
//     yigindis = a
//     a = b = yigindis
//   } else {
//     yigindis = b
//     a = b = yigindis
//   }
// } else {
//   a = b = 0
// }

// console.log(a);
// console.log(b);

// test 10
// let kichig = 0
// if (a < b && a < c) { 
//   kichig = a
// } else if (b < a && b < c) {
//   kichig = b
// } else {
//   kichig = c
// }
// console.log(kichig);

//test 11
let orta = 0;

if (a > b && a < c || a < b && a > c) {
  orta = a;
} else if (b > a && b < c || b < a && b > c) {
  orta = b;
} else {
  orta = c;
}

console.log(orta);

//test 12
let yigindi1 = a + b;
let yigindi2 = a + c;
let yigindi3 = b + c;

let kattaIkkisi;

if (yigindi1 >= yigindi2 && yigindi1 >= yigindi3) {
  kattaIkkisi = a + b;
} else if (yigindi2 >= yigindi1 && yigindi2 >= yigindi3) {
  kattaIkkisi = a + c;
} else {
  kattaIkkisi = b + c;
}

console.log(kattaIkkisi);

//test 13
if (A < B && B < c) {
  A *= 2;
  B *= 2;
  c *= 2;
} else {
  A = -A;
  B = -B;
  c = -c;
}

console.log(A);
console.log(B);
console.log(C);

//test 15
let tartib = 0

if (a == b && b == c) {
  tartib = 4;
} else if (a == b && b == d) {
  tartib = 3;
} else if (a == c && c == d) {
  tartib = 2;
} else {
  tartib = 1;
}

console.log(tartib); 

//test 19
let K = 4

switch (K) {
  case 1:
    console.log("Yomon");
    break;
  case 2:
    console.log("Qoniqarsiz");
    break;
  case 3:
    console.log("Qoniqarli");
    break;
  case 4:
    console.log("Yahshi");
    break;
  case 5:
    console.log("A'lo");
    break;
  default:
    console.log("Xato");
}

//test 20
let oy = 9

switch (oy) {
  case 12:
  case 1:
  case 2:
    console.log("Qish fasli");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Bahor fasli");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Yoz fasli");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Kuz fasli");
    break;
  default:
    console.log("Noto'g'ri raqam kiritildi!");
}

