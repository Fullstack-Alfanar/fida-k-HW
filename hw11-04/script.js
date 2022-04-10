var ageClick = 0;
var idClick = 0;

function AgeValidation() {
    var age = document.getElementById("Age");
    if (ageClick == 0) {// fisrt click init the text content 
        console.log("enter value");
        age.value = -1;
        ageClick++;
    }
    else if (age.value != -1) {

        if (age.value > 0 && age.value < 120)
            console.log(age.value);
        else {
            alert("enter valid age");
            age.value = NaN;
        }
    }
}



function IdValidation() {

    var IDkey = document.getElementById("ID");
    var idArr = [];
    //first case with the fisrt letter in the id
    if (idClick == 0 && parseInt(IDkey.value) >= 0 && parseInt(IDkey.value) <= 9) {
        idArr[0] = parseInt(IDkey.value);
        idClick++;
    }
    //then i want to save the rest of the id number in array so i could send them into validation
    if (idClick != 0) {
        if (IDkey.value.length>9)//in this case the number is bigger than 9 numbers
        {
            IDkey.value=-1;
            idClick=0;
            alert("only 9 number allawed");

        }
        else {
            let num=[], i = 0;
            for(i=0;i<IDkey.value.length;i++)
            num[i]=parseInt(IDkey.value[i]);
            console.log(num);
           // console.log(idArr.length);
            if (num.length == 9) {
                if (checkID(num) == true)
                    alert("the id is correct ");
                else
                    alert("the id is not correct ");

            }
        }
    }
}
//this function checks id the input id array is valid return true else return false 
function checkID(arr) {
    var weightArr = [], multiArr = [], sumArr = [];
    var temp = 2, sum = 0;
    //filling the weight array
    for (var i = 1; i < arr.length; i++) {
        weightArr[i] = temp;
        if (temp == 2)
            temp = temp - 1;
        else {
            if (temp == 1)
                temp++;
        }
    }
    console.log(weightArr);
    for (i = 1; i < arr.length; i++) {
        multiArr[i] = arr[arr.length-i-1] * weightArr[i];
        console.log("mul   "+multiArr[i]);
        if (Math.floor(multiArr[i] / 10) == 0) {
            sumArr[i] = multiArr[i];
        } else {
            sumArr[i] = Math.floor(multiArr[i] / 10) + (multiArr[i] % 10);
        }
        console.log("sumarr   "+sumArr[i]);

        sum = sum + sumArr[i];
        console.log("sum   "+sum);

    }
console.log(sum);
console.log(arr[8]);
console.log(10-(sum%10));
if(arr[8]==0 && sum%10==0 )
return true
else{
        if (arr[8] == 10-(sum % 10))
        return true;
    else false;
}


}