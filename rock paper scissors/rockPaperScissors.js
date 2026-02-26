let userScore = 0;
let compScore = 0;
let gameover = false;

let choices = document.querySelectorAll('.choice');

let winningCombinations = [['rock','scissors'],['paper','rock'],['scissors','paper']];
let draw = [['rock','rock'],['paper','paper'], ['scissors','scissors']];

//Get a random choice for the computer
function makeRandomChoice(){
    let array = ["rock", "paper", "scissors"];
    let randomIndex = Math.random() * array.length;
    randomIndex = Math.floor(randomIndex);
    let compChoice = array[randomIndex];
    return compChoice;
}

//let compScore = document.querySelector('#comp-score');

choices.forEach((choice) => {
    choice.addEventListener('click', () => {

        if(gameover)
            return;                        

        let div = document.querySelector('#mssg');
        div.innerHTML = "";

        let userChoice = choice.id;   // rock/paper/scissors
        let compChoice = makeRandomChoice();

        let resultText = "";

        if (userChoice === compChoice) {
            resultText = "It's a Draw!";
        } 
        else if (
            winningCombinations.some(
                combo => combo[0] === userChoice && combo[1] === compChoice
            )
        ) {
            userScore++;
            document.getElementById("user-score").innerText = userScore;
            resultText = "You Win!";
        } 
        else {
            compScore++;
            document.getElementById("comp-score").innerText = compScore;
            resultText = "Computer Wins!";
        }
        div.innerHTML = `
            <p style="font-size:1.5rem; justify-self: center">You chose <strong>${userChoice}</strong></p>
            <p style="font-size:1.5rem; justify-self: center">Computer chose <strong>${compChoice}</strong></p>
            <p style="font-size:1.7rem; margin:1rem auto 0.5rem auto; justify-self: center"><strong>${resultText}</strong></p>
        `;

        console.log("User Score:", userScore);
        console.log("Computer Score:", compScore);

        if (userScore === 5 || compScore === 5) {
            gameOver = true;
            resultText += "    Game Over!";
            userScore = 0;
            compScore = 0;
            document.getElementById("user-score").innerText = userScore;
            document.getElementById("comp-score").innerText = compScore;
        }
        div.innerHTML = resultText;
    });
});



/* CHATGPT'S CODE
choices.forEach((userChoice) => {
    userChoice.addEventListener('click', () => {

        let div = document.querySelector('#mssg');
        div.innerHTML = "";  

        let elem = document.createElement('div');

        let user = userChoice.id;
        let comp = makeRandomChoice();

        elem.innerHTML = `
            <p style="font-size:1.5rem; margin-bottom:1rem;">
                Computer chose <strong>${comp}</strong>
            </p>
            <p style="font-size:1.2rem; opacity:0.8;">
                Make your choice again!
            </p>
        `;

        div.prepend(elem);
    });
}); */
