// any number dividable by 3 , display fizz
// any number dividable by 5 then display Buzz
// if both then display fizzBuzz

function fizzBuzz(n){
  let i = 1;
  while(n >= i){
    if(i%3 == 0 && i%5 == 0){
      console.log("FizzBuzz");
    }else if(i%3 == 0 ){
      console.log("Fizz");
    }else if(i%5 == 0 ){
      console.log("Buzz");
    }else{
      console.log(i);
    }
    i++;
  }
}

fizzBuzz(20);
