
let all = 0;
for (let i = 1; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
    all +=i;
  }
}
console.log(all);

let mul = 1;
for (let a = 1; a < 17; a++) {
  if (a % 2 != 0) {
    console.log(a);
    mul*=a;
  }
}
console.log(mul);

let x = 1;
for (let b = 10; b <= 18; b++) {
  console.log(b);
  x *=b;
}
console.log(x);



let k=1

for (let j = 17; j <=30; j++) {
    if (j===19 || j===20) {
        continue
    }
    console.log(j);
    k*=j
}
console.log(k);




let sum=0
let v=1
while (v <= 30) {
  if (v%2==0) {
    console.log(v);
    sum+=v
  }v++;
}
console.log(sum);

let sum2=0
let n=1
while (n <= 30) {
  if (n%2!=0) {
    console.log(n);
    sum2+=n
  }n++;
}
console.log(sum2);

console.log(sum-sum2);


for (let w = 1; w <=16; w++) {
    if (w%2==0) {
        console.log(`${w} ${w*w}`);
    }
    
}
