//Homework Due 6.10.19

//start screen content

//when user presses start button:
    //starts a timer
    //gives a question
    //gives options(buttons)

//3 options: right answer, wrong answer, run out of time(wrong answer)

//Global Variables
var correctAnswers = 0;
var wrongAnswers = 0;
var timeOutAnswer = 0; 
var timer = 25;
var userGuess = "";
var answered = false; 
var i =0;                   //track if user answers or not                          
    

//trivia questions
$(document).ready(function () {

var questions = [                   //declare an object, inside objects are key value pairs
{
    question: "In Peter Pan, Captain Hook had a hook on which one of his hands?",//question[0].question
    answers: ["left", "right"],
    correctAnswer: "left",
    image: "assets/images/captainHook.jpg"
},
{
    question: "How did Walt’s Brother Roy propose to his wife Edna?",
    answers: ["by telegraph", "via email", "by letter", "with fireworks",],
    correctAnswers: "by telegraph",
    image: "assets/images/royDisney.jpg"
},
{
    question: "In Aladdin, what is the name of Jasmine’s pet tiger?",
    answers: ["Abu", "Rajah", "Lago", "Gazeem", "Jafar"],
    correctAnswer: "Rajah",
    image: "assets/images/jasmine-rajah8.png"
},  
{
    question: "What was the name of the elephant Dumbo was based off of?",
    answers: ["Bob", "Barnum", "Tuft", "Jumbo"],
    correctAnswer: "Jumbo",                       //super sad story :(
    image: "assets/images/jumbo.jpg"                     //lots of appending

},
{
    question: "What was the first fairy tale that Walt Disney made a cartoon about?",
    answers: ["Little Red Riding Hood", "Bambi", "Little Mermaid", "Snow White"],
    correctAnswer: "Little Red Riding Hood",                       
    image: "assets/images/lrrh.jpg"                     

},  
{
    question: "What was the name of the whale in Pinocchio?",
    answers: ["Samuel", "Gigantor", "Monstro", "Willy"],
    correctAnswer: "Monstro",                       
    image: "assets/images/whale.jpg"                     

}    
]

//start button
function reset() {       //or reset function
    var startButton = $("<button type='button'> start </button>");
    $("#start-button").append(startButton);
}
reset();

//timer run function
    //if it's running then... if it's not running then...

//timer countdown function
    //clock decrement every second with timer--?

//timer stop function
    //make running false?
    //clear the clock

//display question function 
    //randomly pick question from array if not already shown
    //display question and loop through with possible answers
    //array = Math.floor(Math.random() * questions.length)  &  pick = questions[array]??



//function to loop through questions
function questionLoop() {
        $(".theQuestions").empty();
        $(".theAnswers").empty();
        
        var showQuestion = $("<p>" + questions[i].question + "</p>");  //how to dig deeper in the array?
        showQuestion.addClass("theQuestions");
        //showQuestion.attr("loopQuestions", Math.floor(Math.random() * questions.length));
        $("#trivia-questions").append(showQuestion);
        
        for (var j = 0; j < questions[i].answers.length; j++) {
        var showAnswers = $("<button>" + questions[i].answers[j] + "</button>");
        showAnswers.addClass("theAnswers");
        showAnswers.attr("Value", questions[i].answers[j]);
        showAnswers.attr("rightAnswer", questions[i].correctAnswer);
        $("#answer-choices").append(showAnswers);
        console.log(this);
        //
    }

    }

    //when user clicks on an answer
$("#answer-choices").on("click",".theAnswers", function() {

    console.log($(this).attr('Value'),$(".theAnswers").attr("rightAnswer"));

    var userGuess = $(this).attr('Value');
    var rightGuess = $(".theAnswers").attr("rightAnswer");

    if (userGuess === rightGuess) {
        alert("Right Answer!")
        i++;
        questionLoop();
    } else if (userGuess != rightGuess) {
        alert("Wrong Answer!");
        i++;
        questionLoop();
    }
    

});
    
    
    
    //start timer (function)
    
    
    
    //i =0
    
    
    //on click event with question function inside with if/else inside
$(document).on("click", "#start-button", function() {
        //get rid of start button
    $("#start-button").hide();
        
        //put first question on the page 
    questionLoop();
        
        //possible answers which are clickable (buttons)
        


});

//if/else for each question
    //if they get right answer
        //tell them its a correct answer, maybe with picture
        //go to next question
    //if they get wrong answer
        //tell them they're wrong
        //go to next question
    //if timer is up
        //tell them they are wrong
        //go to next question 

//are there anymore question to ask?  has to meet the condition of no more questions     

})
//when timer is up
    //lose
    