let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice');

let winningCombinations = [['rock','scissors'],['paper','rock'],['scissors','paper']];
let draw = [['rock','rock'],['paper','paper'], ['scissors','scissors']];

//Get a random choice for the computer
function makeRandomChoice(){
    let array = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.random() * array.length;
    randomIndex = Math.floor(randomIndex);
    let compChoice = array[randomIndex];
    return compChoice;
}

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
});
