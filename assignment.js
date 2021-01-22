
// https://github.com/munirsayem/Assignment/blob/main/assignment.js

//problem-1............

function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(20);
console.log(result);


// problem-2..........

function budgetCalculator(products){
 var price = 0;
 if(products <= 10) {
     price = products * 50;
 }
 else if (products <= 15) {
     var watch = 10 * 50;
     var remaining = products - 10;
     var phone = remaining * 100;
     price = watch + phone;
 }
 else {
     var watch = 10 * 50;
     var phone = 5 * 100;
     var remaining = products - 15;
     var laptop = remaining * 500;
     price = watch + phone + laptop;
 }
 return price;
}
var result = budgetCalculator(20);
console.log(result);



//problem-3......

function hotelCost(nights){
    var cost = 0;
    if( nights <= 10 ) {
     cost = nights * 100;
    }
    else if( nights <= 20 ) {
        var firstPart = 10 * 100;
        var remaining = nights - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = nights - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var total = hotelCost(23);
console.log(total);

//problem-4..........

function megaFriend(names){
var max = names[0];
for(i= 0; i<names.length; i++){
    var string = names[i];
    if(string>max){
        max = string;
    }
}
return max;
}
var  names =['karim','abdullah','mashrafee','mustafizur','mushfiqur','tamim-iqbal']
var result = megaFriend(names);
console.log("highest value is: ",result);


// Finish.................................

