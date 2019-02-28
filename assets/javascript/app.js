var counter = 0;
var index = 0;
var questions = ["What's Ben's favorie band","Favorite cookie?","Sesame stree character?"];
var options = [["Radiohead","Led Zepplin", "Alice in Chains"],["Chocolate Chip","Raisin","Oatmeal"],["Big Bird","Cookie Monster","Dracula"]];
var answers = [0,0,1];
var guesses = [];
var myVar = 0;

$("#start").on("click", function() {
    newQuestion();
    myVar = setInterval(myTimer, 1000);
    $("#container").removeClass(hide);
});



function myTimer() {
    counter++;
    $("#timeLeft").text(16-counter);
    if (counter === 16){

        if(index === 3) {
            clearInterval();
            gameOver();
        }

        counter = 0;
        newQuestion();
    }
} 

function newQuestion() {
    
    if(index === 3) {
        clearInterval(myVar);
        gameOver();
    }
    
    $("#question").text(questions[index]);
    $("#option1").text(options[index][0]);
    $("#option2").text(options[index][1]);
    $("#option3").text(options[index][2]);
    index++;

    //console.log("new Questions was called and executed, index = " + index);
    

}

$(".option").on("click", function(){
    guesses.push($(this).data("guess"));
    alert(guesses[index-1]);
    counter = 0;
    newQuestion();
});

function gameOver() {
    alert("Game Over!");
    if(guesses[0] === answers[0]) {
        $("#result1").text("Answer 1: Correct");
    } else {
        $("#result1").text("Answer 1: Incorrect (correct answer is " + options[0][0] + ")");
    }

    alert("past execution of first if");

    if(guesses[1] === answers[1]) {
        $("#result2").text("Answer 1: Correct");
    } else {
        $("#result2").text("Answer 1: Incorrect (correct answer is " + options[1][0] + ")");
    }

    if(guesses[2] === answers[2]) {
        $("#result3").text("Answer 1: Correct");
    } else {
        $("#result3").text("Answer 1: Incorrect (correct answer is " + options[2][1] + ")");
    }

}
