// TODO: Create an array with five question objects
var questions = [
    { q: "Are you alive?", a: "t" }, 
    { q: "Is Justin Bieber Hot?", a: "t" },
    { q: "Is the moon full?", a: "f" },
    { q: "Are donuts the best?", a: "t" },
    { q: "is water wet?", a: "t" },
    { q: "Is it normal to have an 11th toe on your knee?", a: "f" },
]

// TODO: Create a variable to keep track of the score
var score = 0;

// TODO: Iterate over the questions array and display each question in a confirmation box

for (var i = 0; i < questions.length; i++){
    var answer = confirm(questions[i].q);
    if ((answer === true && questions[i].a === 't') || 
    (answer === false && questions[i].a === 'f')){
        score++;
        alert('Correct!')
    } else {
        alert('Incorrect!')
    }
}

alert('you got '+score + ' points!')