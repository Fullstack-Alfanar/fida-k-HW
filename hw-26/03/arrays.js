
/*question number 1 */
/* var names = [];
var num;


for (var i = 0; i < 5; i++) {
    names[i] = window.prompt("please Enter a name:");

}
console.log("the first cell in the array " + names[0]);
console.log("the last cell in the array " + names[4]);
console.log("the array is :")
for (var i = 0; i < 5; i++)
    console.log(names[i]);

console.log("the array in the oppsite is :")
console.log(names[4] + names[3] + names[2] + names[1] + names[0]);


/*question 2 */
var fruits = ["apple", "pear", "banana", "dates"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log("printing with help of a loop");
for (i = 0; i < 4; i++)
    console.log(fruits[i]);

/*question 3 */
var grades = [];
flag = 1;
for (i = 0; i < 10; i++) {
    grades[i] = window.prompt("enter garde please");
    if (grades[i] < 0 || grades[i] > 100) {
        console.log("this grade " + grades[i] + " isn't valid");
        flag = 0;
    }
}
if (flag == 1)
    console.log("all gardes are valid");

/*question 4 */
var numbers = [];

var sum = 0, avg = 0, max = -1; min = 101;
/*inputing the valid numbers from user */
for (i = 0; i < 20; i++) {
    numbers[i] = +prompt("enter number between 0-100 included :");
    while (numbers[i] < 0 || numbers[i] > 100)
        numbers[i] = +prompt("please enter a valid number between 0-100(included) :");
}
/*printing oppsite dicretion of an array, calc the sum finding the max and min */
console.log("array")
for (i = 19; i >= 0; i--) {
    console.log(numbers[i]);
    sum = sum + numbers[i];
    if (numbers[i] > max)
        max = numbers[i];
    if (min > numbers[i])
        min = numbers[i];
}

/*printing the sum of all number  */
console.log("the sum of all number in array " + sum);
/*printing the average of all number  */
avg = sum / 20;
console.log("the average of all number in array " + avg);
/*printing the max number in the array  */
console.log("the max number in the array " + max);
/*printing the min number in the array  */
console.log("the max number in the array " + min);


/*question 20 */
var n = +prompt("please enter a size:");
var tringle = [];

for (i = 0; i < n; i++) {
    tringle[i] = i + 1;
    console.log(tringle);
}

/*question 21 */
var n = +prompt("please enter a size:");
var square = [];

for (var i = 0; i < n; i++) {
    square[i] = i + 1;
}
for (var i = 0; i < n; i++)
    console.log(square); 

/*question 22 */
var NonZero = [];
var i = 0;
NonZero[i] = +prompt("enter number:");
while (NonZero[i] != 0) {
    i++;
    NonZero[i] = +prompt("enter number:");
}
for (i = (NonZero.length - 1); i >= 0; i--)
    console.log(NonZero[i]);

/*Challenge q1 */
var n = +prompt("please enter a size:");
var square = [];

for (var i = 0; i < n; i++) {
    square[i] = "*";
}
for (var i = 0; i < n; i++)
    console.log(square); 

/*Challenge q2 */
var n = +prompt("please enter a size n:");
var m = +prompt("please enter a size m:");
var block = [];

for (var i = 0; i < n; i++) {
    block[i] = "*";
}
for (var i = 0; i < m; i++)
    console.log(block); 


/*Challenge q3 */
var n = +prompt("please enter a size n:");
var tringle = [];

for (var i = 0; i < n; i++) {
    tringle[i] = "*";
}
for (var i = (n-1); i >= 0; i--)
   {
       console.log(tringle); 
      for (var j=i; j < n; j++)
      tringle[j]=" ";
   }
