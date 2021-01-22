// problem-no-1

function kilometerToMeter(kilo){
    var meter=kilo*1000;
    return meter;
}
var gazipurToDhaka= kilometerToMeter(125);
console.log(gazipurToDhaka);

var cost=0;
function hotelCost(day){
    if(day<=10){
        cost=day*100;
    }
    else if(day<=20){
        var firstCost=10*100;
        var dayRemaining=day-10;
        var secondCost=dayRemaining*80;
        totalCost= firstCost+secondCost;
    }
    else (day<=20){
        var firstCost=10*100;
        var secondCost=10*80;
        var dayRemaining=day-20;
        var thirdCost=dayRemaining*50;
        totalCost=firstCost+secondCost+thirdCost;

    }
    
    


}

var result=hotelCost(30);
console.log(result);