var counter = 0;
var index = 0;
var questions = ["What's Ben's favorie band","Favorite cookie?","Sesame stree character?"];
var options = [["Radiohead","Led Zepplin", "Alice in Chains"],["Chocolate Chip","Raisin","Oatmeal"],["Big Bird","Cookie Monster","Dracula"]];
var answers = [0,0,1];
var guesses = [];
var myVar = setInterval(myTimer, 1000);

newQuestion()

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
    $("#question").text(questions[index]);
    $("#option1").text(options[index][0]);
    $("#option2").text(options[index][1]);
    $("#option3").text(options[index][2]);
    index++;

    if(index === 4) {
        clearInterval();
        gameOver();
    }

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
        $("#result1").text("Correct");
    } else {
        $("#result1").text("Wrong");
    }
}
