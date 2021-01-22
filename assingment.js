// problem-no-1

function kilometerToMeter(kilo){
    var meter=kilo*1000;
    return meter;
}
var gazipurToDhaka= kilometerToMeter(125);
console.log(gazipurToDhaka);


// problemNo-2













// problemNo-3


function hostelCost(day){       

var cost=0;
if(day<=10){
cost=day*100;
}
else if(day<=20){
var firstCost=10*100;
var dayRemaining=day-10;
var secondCost=dayRemaining*80;
cost= firstCost+secondCost;
}
else {
var firstCost=10*100;
var secondCost=10*80;
var dayRemaining=day-20;
var thirdCost=dayRemaining*50;
cost=firstCost+secondCost+thirdCost;

}

return cost;


}
var totalCost=hostelCost(34);
console.log(totalCost);


// problemNo-4


var word = megaFriend(["Parvej","Mosharaf","Hasib", "khoka", "Robin", "Saima", "Naima",  "alamin"]);

  function megaFriend(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  console.log(word);

var watch=50;
var phone=100;
var laptop=500;
  function budgetCalculator(num,num2,num3){

var  cost1=num*watch;
var cost2=num2*phone;
var cost3=num3*laptop;
totalCost=cost1+cost2+cost3;
    return totalCost;
}
var result=budgetCalculator(5,8,9);
console.log(result);
     


    