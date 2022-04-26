// + - / %
// (F - 32) * 5/9 = C 

function cotempConvert(cetemp) {
    let fahrenheit;

    fahrenheit = celsius *9/5 + 32;
    return fahrenheit

console.log (tempConvert(32))





function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
console.log(reverseString("hello"));

function strReverse(str){
   return str.split("").reverse().join("")
}
console.log(reverseString)("let's reverse this string"))



    //function (amount,rate)x Discount
    function calculate() {
        var price= 40;
        var discount= 0;
        var afterDiscount= 0;
     /*    price = Number(document.discountCalculator.price.value);*/
           numberOfMembers = Number(document.discountCalculator.value);
         discount = Number(document.discountCalculator.discount.value);




     
     
      afterDiscount=price - ( price*discount/100 );
     
     
     /*   document.discountCalculator.price.value=price.toFixed(2);*/
        document.discountCalculator.discount.value=discount.toFixed(2);
        document.discountCalculator.afterDiscount.value=afterDiscount.toFixed(2);
     
     }
