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






//Task 2
function formatArrayStrings(stringArray, numberArray) {
  return stringArray.map((str, index) => {
    if (numberArray[index] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}



//Task 3
function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: index + 1
    };
  });
}

const names = ["Kwame", "Kojo", "Kwaku", "Ama", "Kwabena"];
const processedNumbers = processArray([1, 2, 3, 4, 5]);
const modifiedNames = formatArrayStrings(names, processedNumbers);
const userProfiles = createUserProfiles(names, modifiedNames);

console.log(userProfiles);

