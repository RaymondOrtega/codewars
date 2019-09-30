// Given a number return the closest number to it that is divisible by 10.
//
// Example input:
//
// 22
// 25
// 37
// Expected output:
//
// 20
// 30
// 40

//0(N)
const closestMultiple10 = num =>{
for(let i=num; i<=num; i--){
if ( i % 10===0 ){
  if(i + 5 <= num){
   return i+10
   }
   else{
   return i
   }
  }
 }
}
//0(1)
const closestMultiple10 = num =>{
 return Math.round(num / 10) * 10
}
