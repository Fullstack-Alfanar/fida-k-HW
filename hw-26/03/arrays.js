
/*question number 1 */
var arr = [];
var num;


for (var i = 0; i < 5; i++) {
    arr[i] = window.prompt("please Enter a name:");

}
console.log("the first cell in the array " + arr[0]);
console.log("the last cell in the array " + arr[4]);
console.log("the array is :")
for (var i = 0; i < 5; i++)
    console.log(arr[i]);

console.log("the array in the oppsite is :")
for (i = 4; i >= 0; i--)
    console.log(arr[i]);
