// Write a program that outputs the string representation of numbers from 1 to n.
//
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
// For numbers which are multiples of both three and five output “FizzBuzz”.

var fizzBuzz = function(n) {
    let fizzBuzz=[]
    for (let i=1; i<=n; i++){
        if(i%3===0&&i%5===0){
           fizzBuzz.push('FizzBuzz')
           }else if(i%5===0){
           fizzBuzz.push('Buzz')
           }else if(i%3===0){
           fizzBuzz.push('Fizz')
           }else{
           fizzBuzz.push(i+"")
           }
    }
    return fizzBuzz
};
