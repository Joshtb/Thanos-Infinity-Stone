// create random # generator for thanos
//create random number generator for stones
// make stones click able
//make an area where it shows wins and losses
var wins =0;
var losses =0;
var userGuessArr =[];
var userGuess = $("#userGuess")
var stoneNumberArr= [1,2,3,4,5,6,7,8,9,10,11,12];
var thanosNumber=[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120]
var counter=0;

var newStone1= stoneNumberArr[[Math.floor(Math.random() * stoneNumberArr.length)]];
var newStone2= stoneNumberArr[[Math.floor(Math.random() * stoneNumberArr.length)]];
var newStone3= stoneNumberArr[[Math.floor(Math.random() * stoneNumberArr.length)]];
var newStone4= stoneNumberArr[[Math.floor(Math.random() * stoneNumberArr.length)]];
var targetNumber= thanosNumber[[Math.floor(Math.random() * thanosNumber.length)]];



//randomnumber for stones
$(document).ready(function(){
        $("#randomNumberGenerator").html(targetNumber);
     

$("#spaceStone").click(function(){

        counter = counter + newStone1;
   $("#userGuess").html(counter);
   checkScore();

   
});
$("#timeStone").click(function(){
    counter = counter + newStone2;
    $("#userGuess").html(counter);
    checkScore();
});

$("#powerStone").click(function(){
    counter = counter + newStone3;
    $("#userGuess").html(counter);
    checkScore();
});
$("#realityStone").click(function(){
    counter = counter + newStone4;
    $("#userGuess").html(counter);
    checkScore();
});


});
function checkScore(){
if (counter > targetNumber){
    alert("YOU LOSE.You've been defeated by Thanos! Click to try again!")  
losses++;
$("#losses").html(losses);
reset();
} else if( targetNumber < counter) {

} else if (counter === targetNumber){

    wins++;
    alert(" YOU WIN!!!!You have defeated Thanos! Fight Again!")
    $("#wins").html(wins);
    reset();
}
}

function reset(){
     counter=0;
 newStone1= stoneNumberArr[[Math.floor(Math.random() * stoneNumberArr.length)]];
 newStone2= stoneNumberArr[[Math.floor(Math.random() * stoneNumberArr.length)]];
 newStone3= stoneNumberArr[[Math.floor(Math.random() * stoneNumberArr.length)]];
 newStone4= stoneNumberArr[[Math.floor(Math.random() * stoneNumberArr.length)]];
 targetNumber= thanosNumber[[Math.floor(Math.random() * thanosNumber.length)]];
 $("#randomNumberGenerator").html(targetNumber);
$("#userGuess").html(counter);


}

// if(targetNumber = counter){
//     wins++;
//     alert("youve beaten thanos, go again!");
// }else{
//     losses++;
//     alert("you were defeated by thanos try again.")
// }