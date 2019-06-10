//Homework Due 6.10.19

//2 major issues; clock wont go away after all the q's, and woody wont appear (function calls but wont work), and no score.

//Variables
var correctAnswers = 0;
var wrongAnswers = 0;
var timeOutAnswer = 0;
var timer = 25;
var timeDec;
var userGuess = "";
var answered = false;
var i = 0;
var score = 0;

//trivia questions
$(document).ready(function () {

    var questions = [                   //declare an object, inside objects are key value pairs
        {
            question: "In Peter Pan, Captain Hook had a hook on which one of his hands?",   //questions[0].question
            answers: ["left", "right"],
            correctAnswer: "left",
            image: "assets/images/captainHook.jpg"
        },
        {
            question: "How did Walt’s Brother Roy propose to his wife Edna?",
            answers: ["by telegraph", "via email", "by letter", "with fireworks",],
            correctAnswer: "by telegraph",
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
    function start() {                                                    //or reset function
        var startButton = $("<button type='button'> start </button>");
        $("#start-button").append(startButton);
    }
    start();

    //create score in header
    // var showScoreScore = $("<div>");
    // showScoreScore.attr(score.valueOf());
    // $("#score").html(showScoreScore);
    
    //stop the timer
    function timerStop () {
        $("#timer").empty();
    };

    //makes clock count down
    function decrement() {
        timer--;
        $("#timer").text(timer);
        
        if (timer < 1) {
            alert("Out of Time!!!")
            clearInterval(timeDec);
            timer = 25;
            questionLoop();
        }
    }

    //resets the timer
    function resetTimer() {
        clearInterval(timeDec);
        timer = 25;
        timeDec = setInterval(decrement, 1000);
        decrement();
        questionLoop();
    }

    //function for dancing woody
    function woody() {
        $(".theQuestions").empty();
        $("#answer-choices").empty();

        console.log("woody");

        var celImage = $("<img/>");
        celImage.addClass("woody");
        celImage.attr("../images/dancingWoody.gif");
        $("#celebration").html(celImage);
        $(".woody").show().delay(5000).fadeOut();
    }

    function showScore() {
        alert("Your score is " + score.val());
    }
                           
    
    //start button click event, hides start button and instructions, starts trivia questions
    $(document).on("click", "#start-button", function () {
        $("#start-button").hide();
        $("#instructions").hide();
        timeDec = setInterval(decrement, 1000);
        decrement();
        questionLoop();
        
        
    });

    //function to loop through questions
    function questionLoop() {

        $(".theQuestions").empty();
        $("#answer-choices").empty();
        
        if (i >= questions.length) {
            console.log("hitting the if")
            clearInterval(timeDec);
            $("#timer").empty();
            alert("You got " + score.valueOf() + " answers right!")
            return;
        }

        var showQuestion = $("<p>" + questions[i].question + "</p>");  
        showQuestion.addClass("theQuestions");
        $("#trivia-questions").append(showQuestion);

         for (var j = 0; j < questions[i].answers.length; j++) {                      
            var showAnswers = $("<button>" + questions[i].answers[j] + "</button>");
            showAnswers.addClass("theAnswers");
            showAnswers.attr("Value", questions[i].answers[j]);
            showAnswers.attr("rightAnswer", questions[i].correctAnswer);
            $("#answer-choices").append(showAnswers); 

        }
    }

    // function showAnswerImage() {
    // var showImage = $("<img src='questions[i].image");
    // showImage.addClass("answerImage");
    // $("#answer-image").html(showImage);
    // }

    //when user clicks on an answer
    $("#answer-choices").on("click", ".theAnswers", function () {

        console.log($(this).attr('Value'), $(".theAnswers").attr("rightAnswer"));

        var userGuess = $(this).attr('Value');
        var rightGuess = $(".theAnswers").attr("rightAnswer");
        if (i < questions.length) {
            i++;

            if (userGuess === rightGuess && timer > 0) {
                score++;
                alert("Right Answer!")
                woody(); 
                resetTimer();
                questionLoop();
            } else if (userGuess != rightGuess && timer > 0) {
                alert("Wrong Answer");
                resetTimer();
                questionLoop();
            } 
        } else {
            console.log("WOOP")
        }

        

    });

})

//start screen content

//when user presses start button:
//starts a timer
//gives a question
//gives options(buttons)

//3 options: right answer, wrong answer, run out of time(wrong answer)

    //start timer (function)

    //timer run function
    //if it's running then... if it's not running then...


    //timer stop function
    //make running false?
    //clear the clock

    //display question function 
    //randomly pick question from array if not already shown
    //display question and loop through with possible answers
    //array = Math.floor(Math.random() * questions.length)  &  pick = questions[array]??

    //i =0



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


//when timer is up
    //lose
