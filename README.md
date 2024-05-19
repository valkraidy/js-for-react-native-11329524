//Include your student ID and a brief explanation of each task.
Student --11329524


Explanation 
TASK 1
The processArray function takes an array of numbers numbers as an argument.
It initializes a variable i to 0, which will be used as the loop counter.
The function then enters a while loop that continues as long as i is less than the length of the numbers array.
Inside the loop, the code checks if the current element numbers[i] is even or odd using the modulo operator (%). If the result is 0, the number is even; otherwise, it's odd.
If the number is even, it is squared (Math.pow(numbers[i], 2)). If the number is odd, it is cubed (Math.pow(numbers[i], 3)).
After the transformation, the loop counter i is incremented by 1.
Once the loop completes, the modified numbers array is returned.


Task 2
The formatArrayStrings function takes two arguments: stringArray (an array of strings) and numberArray (an array of numbers processed by processArray).
Inside the function, we use the map() method to iterate over each string in the stringArray.
For each string, we check the corresponding number in the numberArray using the index parameter. If the number is even, we capitalize the entire string using str.toUpperCase(). If the number is odd, we convert the string to lowercase using str.toLowerCase().
The modified strings are returned as a new array.

Task 3
The createUserProfiles function takes two arguments: names (an array of names) and modifiedNames (an array of modified names from the formatArrayStrings function).
Inside the function, we use the map() method to iterate over each name in the names array.
For each name, we create an object with three properties:
originalName: the original name from the names array.
modifiedName: the corresponding modified name from the modifiedNames array.
id: an auto-incremented number starting from 1.
The function returns an array of these objects, representing the user profiles.







