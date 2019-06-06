//Homework Due 6.10.19

//start screen content

//when user presses start button:
    //starts a timer
    //gives a question
    //gives options(buttons)

//3 options: right answer, wrong answer, run out of time(wrong answer)

//Variables
    //questions
    //answers 
    //timer
    //images
    

//question, 4 choices, correct answer - ca same as one of the choices
$(document).ready(function () {

var questions = [                   //declare an object, inside objects are key value pairs
{
    question: "What color is the sky?",
    answers: ["red", "blue", "green", "yellow"],
    correctAnswer: "blue",
   // image: //path to source
},
{
    question: "What color is the sun?",
    answers: ["yellow", "purple", "pink", "green"],
    correctAnswers: "yellow",
   // image: 
}  
]

//start button
function reset() {       //or reset function
    var startButton = $("<button type='button'> start </button>");
    //$("#start-button").html(startButton);
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
    