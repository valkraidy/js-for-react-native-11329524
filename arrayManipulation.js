//TASK 1


function processArray(numbers){
let i =0;
while(i < numbers.length){
  if(numbers[i] % 2 === 0){
    numbers[i]=Math.pow(numbers[i],2)
  } else {
    numbers[i] = Math.pow(numbers[i],3)
  }
 i++;
}
return numbers;
}
console.log(processArray([1,2,3,4,5]));


