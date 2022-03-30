/*question 1 */
function calcAvg(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++)
        sum = sum + arr[i];
    return (sum / arr.length);
}
//multiple runs for the function
console.log("the average of the array is " + calcAvg([23, 10, 65, 89, 100, 928]));
console.log("the average of the array is " + calcAvg([87, 54, 65, 17, 266, 2]));
console.log("the average of the array is " + calcAvg([11, 755, 98, 100, 98, 222]));
/*----------------------------------------------------------------------------------------------------*/
/*question 2 */
function minNum(arr) {
    //Initialize the min to be the first number so I could compare
    let min = arr[0];
    for (i = 0; i < arr.length; i++)
        if (arr[i] < min)
            min = arr[i];
    return (min);
}
//multiple runs for the function
console.log("the min num in array is " + minNum([23, 10, 65, 89, 100, 928]));
console.log("the min num in array is " + minNum([87, 54, 65, 17, 266, 2]));
console.log("the min num in array is " + minNum([11, 755, 98, 100, 98, 222]));
/*----------------------------------------------------------------------------------------------------*/
/*question 3 */
function longestString(arr) {
    //Initialize the max to be the first string size so I could compare
    let max = arr[0].length;
    for (i = 0; i < arr.length; i++)
        if (arr[i].length > max)
            max = arr[i].length;
    return (max);
}
//multiple runs for the function
console.log("the size of longest string in array is " + longestString(["lol", "brief", "yes", "maybe", "longest"]));
console.log("the size of longest string in array is " + longestString(["no", "milk", "helper"]));
console.log("the size of longest string in array is " + longestString(["gogo", "google", "insta", "lifeless", "its me fida", "hehe"]));
/*----------------------------------------------------------------------------------------------------*/

/*question 4 */

function longestString2(arr) {
    //Initialize the max to be the first string size so I could compare
    let max = arr[0].length, maxstring;
    for (i = 0; i < arr.length; i++)
        if (arr[i].length > max) {
            max = arr[i].length;
            maxstring = arr[i];
        }
    return (maxstring);
}
//multiple runs for the function
console.log("the longest string in array is " + longestString(["lol", "brief", "yes", "maybe", "longest"]));
console.log("the longest string in array is " + longestString(["no", "milk", "helper"]));
console.log("the longest string in array is " + longestString(["gogo", "google", "insta", "lifeless", "its me fida", "hehe"]));
/*----------------------------------------------------------------------------------------------------*/
/*question 5 */
function biggerOrEqual(arr) {
    let sum = 0, avg, count = 0;
    for (i = 0; i < arr.length; i++)
        sum = sum + arr[i];
    avg = sum / arr.length;
    for (i = 0; i < arr.length; i++)
        if (arr[i] >= avg)
            count++;
    return (count);
}
//multiple runs for the function
console.log("the count of greater or equal from average in array is " + biggerOrEqual([23, 10, 65, 89, 100, 928]));
console.log("the count of greater or equal from average in array is " + biggerOrEqual([87, 54, 65, 17, 266, 2]));
console.log("the count of greater or equal from average in array is " + biggerOrEqual([11, 755, 98, 100, 98, 222]));
/*----------------------------------------------------------------------------------------------------*/
/*question 6 */
function checkPrime(num) {
    // check if num is 1 return false
    if (num == 1) return false;

    // check is num greater than 1
    else if (num > 1) {
        //looping thru 1 to num-1
        for (i = 1; i < num; i++)
            if (num % i == 0)
                return false;
        return true;
    }
}
//multiple runs for the function
console.log("is it a prime number ?" + checkPrime(12));
console.log("is it a prime number ?" + checkPrime(11));
console.log("is it a prime number ?" + checkPrime(31));
/*----------------------------------------------------------------------------------------------------*/

/*question 7 */
function isArrayPrime(arr) {
    let count = 0;
    for (i = 0; i < arr.length; i++)
        if (checkPrime(arr[i]) == true)
            count++;

    if (arr.length == count)
        return true;
}
//multiple runs for the function
console.log("the count of prime numbers in array is " + minNum([23, 10, 65, 89, 100, 928]));
console.log("the count of prime numbers in array is " +minNum([87, 54, 65, 17, 266, 2]));
console.log("the count of prime numbers in array is " + minNum([11, 755, 98, 100, 98, 222]));