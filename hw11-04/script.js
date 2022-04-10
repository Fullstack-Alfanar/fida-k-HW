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
        console.log(idArr[0]);
        console.log(IDkey.value);
    }
    //then i want to save the rest of the id number in array so i could send them into validation
    if (idClick != 0) {
        if (Math.floor(parseInt(IDkey.value) / 1000000000) > 0)//in this case the number is bigger than 9 numbers
        {
            IDkey.value = idArr;
            alert("only 9 number allawed");
        }
        else {
            let num = parseInt(IDkey.value), i = 0;
            while (Math.floor(num / 10) != 0)//note the array is filled backwords
            {
                idArr[i] = num % 10;
                num = Math.floor(num / 10);
                i++;

            }
            idArr[i] = num;
            if (idArr.length == 9) {
                if (checkID(idArr) == true)
                    console.log("the id is corect ");
                else
                    console.log("the id is not corect ");

            }
        }
    }
}
//this function checks id the input id array is valid return true else return false 
function checkID(arr) {

}