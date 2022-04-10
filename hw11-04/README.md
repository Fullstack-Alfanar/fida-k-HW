# hw11-04
## i bulid a form with minimal style 
### the whole purpose of this form is :
> #### to check if the age is in the right range 1-120( validate age)
> #### to validate the id  number according the alogrithm 
## the id algorithm 
### It needs a bit of mathmtical calculations an thats how i did it:
>### 1)first of all that function that check the algorithm only take an array with 9 numbers .
>### 2)the function create 3 arrays one for weights which filled from second place and used backwords
>### 3) the second array is for multiplication the id number multipky the weight number, once again we calculate backwords as the algorithm wants.
>### 4)the third array is for the sum if the mlutiplication answer was two digits then i sum the digits example id it was 18  then in the sum array will be 1+8=9
>### last calculation is to sum all number in the sum array,i did all this calculations in one loop but made sure to read the array backwords
>### after all that i check if the last number with the rest from sum if i round it up example let say the sum was 43 then the last digit must be 7=50-43.