//Homework Due 6.10.19

//start screen content

//when user presses start button:
    //starts a timer
    //gives a question
    //gives options(buttons)

//3 options: right answer, wrong answer, run out of time(wrong answer)

//Variables
var correctAnswers;
var wrongAnswers; 
var timer;
    

//question, 4 choices, correct answer - ca same as one of the choices
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
}  
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
    