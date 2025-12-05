//Alternate Indicator
    //Winner
    //Main


        //Alternate Indicator
        let currentPlayer= 'X';
        let xIndic = document.getElementById('xIndic');
        let oIndic = document.getElementById('oIndic');

        function updateActive(){
            if (currentPlayer === 'X'){
                xIndic.classList.add('xActive');
                oIndic.classList.remove('oActive');
            }else{
                xIndic.classList.remove('xActive');
                oIndic.classList.add('oActive');
            }
        }

        //Winner
        function checkWinner(){
            for (let pattern of winningP){
                // pattern[1] gives me index (here, 1). boxes[pattern[1]] returns the box at index 1. boxes.[pattern[1]].innerText
                // returns the values inside the box at index 1
                let pos1val = boxes[pattern[0]].innerText;
                let pos2val = boxes[pattern[1]].innerText;
                let pos3val = boxes[pattern[2]].innerText;

                if (pos1val != "" && pos2val != "" && pos3val != ""){
                    if (pos1val === pos2val && pos2val === pos3val){
                        boxes[pattern[0]].classList.add('player');
                        boxes[pattern[1]].classList.add('player');
                        boxes[pattern[2]].classList.add('player');

                        winnerBanner.innerHTML = `<h2>Congratulations!<br>${pos1val} has won</h2>`;
                        winnerBanner.style.visibility = 'visible';
                        winnerBanner.style.opacity = 1;


                    }
                }
            }
        }

        //Main
        let boxes = document.querySelectorAll('.box');
        let reset = document.querySelector('.reset');
        let body = document.querySelector('body');
        let winnerBanner = document.querySelector('.banner');
        //Do not use <getElementsByClassName> because it returns a collection of elements (a list)
            //  rather than one element


        const winningP =  [
            [0,1,2], 
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        boxes.forEach((box) =>{
            box.addEventListener('click',()=>{
                box.innerText = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                updateActive();
                box.disabled = true;         //Important !!
                checkWinner();
                restart();
            })
        });

        reset.addEventListener('click', ()=>{
            boxes.forEach((box) => {
                box.innerText ="";
                box.classList.remove('player');
                box.disabled = false;
            });
            winnerBanner.style.visibility = 'hidden';
            winnerBanner.style.opacity = 0;
        });

