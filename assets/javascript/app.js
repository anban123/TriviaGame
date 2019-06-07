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
var answered = false;         //track if user answers or not
    

//trivia questions
$(document).ready(function () {

var questions = [                   //declare an object, inside objects are key value pairs
{
    question: "In Peter Pan, Captain Hook had a hook on which one of his hands?",
    answers: ["left", "right"],
    correctAnswer: "left",
    image: "images/captainHook.jpg"
},
{
    question: "How did Walt’s Brother Roy propose to his wife Edna?",
    answers: ["by telegraph", "via email", "by letter", "with fireworks",],
    correctAnswers: "by telegraph",
    image: "images/royDisney.jpg"
},
{
    question: "In Aladdin, what is the name of Jasmine’s pet tiger?",
    answers: ["Abu", "Rajah", "Lago", "Gazeem", "Jafar"],
    correctAnswer: "Rajah",
    image: "images/jasmine-rajah8.png"
},  
{
    question: "What was the name of the elephant Dumbo was based off of?",
    answers: ["Bob", "Barnum", "Tuft", "Jumbo"],
    correctAnswer: "Jumbo",                       //super sad story :(
    image: "images/jumbo.jpg"                     //lots of appending

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
    
    //get rid of start button
    
    //started timer 
    
    //put first question on the page 
    
    //possible answers which are clickable (buttons)
    
}

//on click event with question function inside with if/else inside

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
    