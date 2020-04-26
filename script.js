// Can't figure out why localstorage is overwriting "Scores" : scores.  On refresh only the last entry is kept.
// I can parse the data and it looks correct when console logged(appending to scores array line 75 logged from line 100)

var Question = document.getElementById("Question")
var Button1 = document.getElementById("Button1")
var Button2 = document.getElementById("Button2")
var Button3 = document.getElementById("Button3")
var Button4 = document.getElementById("Button4")
var YourScore = document.getElementById("YourScore")
var EnterInitials = document.getElementById("EnterInitials")
var EnterYourInitials = document.getElementById("EnterYourInitials")
var submitEl = document.getElementById("submit")
var StartButton = document.getElementById("Start")
var timer = document.getElementById("Timer")


var questions = [

    {
        "question": "What are variables used for in JavaScript Programs?",
        "choices": ["A. Storing numbers, dates, or other values", "B. Varying randomly", "C. Causing high-school algebra flashbacks", "D. None of these"],
        "answer": "A. Storing numbers, dates, or other values"
    },

    {
        "question": "______ tag is an extension to HTML that can enclose any number of JavaScript",
        "choices": ["A. <SCRIPT>", "B. <BODY>", "C. <HEAD>", "D. <TITLE>"],
        "answer": "A. <SCRIPT>"
    },

    {
        "question": "What is the correct syntax for referring to an external script called 'abc.js'?",
        "choices": ["A. <script href=' abc.js'>", "B. <script name=' abc.js'>", "C. <script src=' abc.js'>", "D. None of these"],
        "answer": "C. <script src=' abc.js'>"
    },

    {
        "question": "If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
        "choices": ["A. 'New Text'?", "B. para1.value='New Text';", "C. para1.firstChild.nodeValue= 'New Text';", "D. para1.nodeValue='New Text';"],
        "answer": "B. para1.value='New Text';"
    },

    {
        "question": "Which of the following best describes JavaScript?",
        "choices": ["A. a low-level programming language", "B. a scripting language precompiled in the browser", "C. a compiled scripting language", "D. an object-oriented scripting language"],
        "answer": "D. an object-oriented scripting language"
    },

    {
        "question": "this is a question, answer is answer2",
        "choices": ["answer1", "answer2", "answer3", "answer4"],
        "answer": "answer2"
    },];
Question.style.opacity = "0.0"
Button1.style.opacity = "0.0"
Button2.style.opacity = "0.0"
Button3.style.opacity = "0.0"
Button4.style.opacity = "0.0"
YourScore.style.opacity = "0.0"
EnterInitials.style.opacity = "0.0"
timer.style.opacity = "0.0"

// Timer and related functions


function starttimercountdown() {
    Question.style.opacity = "1.0"
    Button1.style.opacity = "1.0"
    Button2.style.opacity = "1.0"
    Button3.style.opacity = "1.0"
    Button4.style.opacity = "1.0"
    YourScore.style.opacity = "0.0"
    timer.style.opacity = "1.0"

    var scores = [];

    var curquestion = 0;

    function dothing() {
        if (secondsleft == 0 || curquestion == 6) {


            Question.style.opacity = "0.0"
            Button1.style.opacity = "0.0"
            Button2.style.opacity = "0.0"
            Button3.style.opacity = "0.0"
            Button4.style.opacity = "0.0"
            YourScore.style.opacity = "1.0"
            EnterInitials.style.opacity = "1.0"
            YourScore.textContent = ("Your Score: " + secondsleft)
            EnterInitials.addEventListener("submit", function (event) {
                event.preventDefault();
//Problems start here 
                scores.push(
                    {
                        name: EnterYourInitials.value,
                        score: secondsleft
                    });
                localStorage.setItem("Scores", JSON.stringify(scores))
                console.log(JSON.parse(localStorage.getItem("Scores")));

            }
            );

            localStorage.setItem("Score", secondsleft)
            clearInterval(timercountdown)
        };
        Question.textContent = questions[curquestion].question
        Button1.textContent = questions[curquestion].choices[0]
        Button2.textContent = questions[curquestion].choices[1]
        Button3.textContent = questions[curquestion].choices[2]
        Button4.textContent = questions[curquestion].choices[3]

    };

    Button1.addEventListener("click", function () {
        if (this.textContent == questions[curquestion].answer) {
            console.log("correct answer chosen")
        } else {
            console.log("incorrect answer chosen")
        };
        curquestion++;
        console.log("After click curquestion number is " + curquestion);
        dothing();
    });

    Button2.addEventListener("click", function () {
        if (this.textContent == questions[curquestion].answer) {
            console.log("correct answer chosen")
        } else {
            console.log("incorrect answer chosen")
        };
        curquestion++;
        console.log("After click curquestion number is " + curquestion);
        dothing();
    });

    Button3.addEventListener("click", function () {
        if (this.textContent == questions[curquestion].answer) {
            console.log("correct answer chosen")
        } else {
            console.log("incorrect answer chosen")
        };
        curquestion++;
        console.log("After click curquestion number is " + curquestion);
        dothing();
    });
    Button4.addEventListener("click", function () {
        if (this.textContent == questions[curquestion].answer) {
            console.log("correct answer chosen")
        } else {
            console.log("incorrect answer chosen")
        };
        curquestion++;
        console.log("After click curquestion number is " + curquestion);
        dothing();
    });

    // Timer and related functions

    dothing();
    var secondsleft = 15;

    var timercountdown = setInterval(function () {
        secondsleft--;
        console.log(secondsleft)
        timer.textContent = ("Time remaining: " + secondsleft);

        if (secondsleft === 0) {
            // Prompt game over and score, get initials, save initials to localstorage
            Question.style.opacity = "0.0"
            Button1.style.opacity = "0.0"
            Button2.style.opacity = "0.0"
            Button3.style.opacity = "0.0"
            Button4.style.opacity = "0.0"
            YourScore.style.opacity = "1.0"
            EnterYourInitials.style.opacity = "1.0"
            timer.style.opacity = "0.0"
            clearInterval(timercountdown)

        };
        localStorage.setItem("Score", secondsleft)

    }, 1000);
};


StartButton.addEventListener("click", starttimercountdown);
