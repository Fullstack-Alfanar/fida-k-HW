// /*question 1 */

// function FullName (){
//     var firstName=window.prompt("enter your first name");
//     var lastName=window.prompt("enter your last name");
//     console.log(firstName+" "+lastName);
// }
// //multiple runs for the function
// FullName();
// FullName();

// /*----------------------------------------------------------------------------------------------------*/
// /*question 2 */
// function avgSum (num1,num2,num3){
//     let sum=num1+num2+num3;
//     let avg=sum/3;
//     console.log("the sum is "+sum);
//     console.log("the averege is "+avg);
// }
// //multiple runs for the function
// avgSum(24,65,108);//hard-coded input
// avgSum(Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100));
// let num1=+prompt("enter number 1:"),num2=num1=+prompt("enter number 2:"),num3=+prompt("enter number 3:");
// avgSum(num1,num2,num3);

// /*----------------------------------------------------------------------------------------------------*/
// /*question 3 */
// let n = +prompt("enter number n:");
// function printRow(len) {
//     var row = "";
//     for (var i = 0; i < len; i++)
//         row = row + "*";
//     console.log(row+"\n");
// }
// function printSquare(size) {
//     for (var i = 0; i < size; i++) {
//         printRow(size);
//     }
// }
// printSquare(n);

// /*----------------------------------------------------------------------------------------------------*/
// /*question 4 */
// let n = +prompt("enter number n:");
// function printLimited(limit) {
//     var arr = [];
//     for (var i = 1; i <= limit; i++)
//         arr[i-1] = i;
//         console.log(arr);
// }
// function printTringle(size) {
//     for (var i = 1; i <= size; i++) {
//         printLimited(i);
//     }
// }
// printTringle(n);

/*----------------------------------------------------------------------------------------------------*/
/*question 5 */
let n = +prompt("enter number n:");
function printRow(len) {
    var arr = [];
    for (var i = 1; i <= len; i++)
        arr[i - 1] = "*";
    console.log(arr);
}
function printTringle(size) {
    for (var i = size; i >=1; i--) {
        printRow(i);
    }
}
printTringle(n);