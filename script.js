let btns = document.querySelectorAll(".turn")
let user_msg = document.querySelector("#user_msg");
let computer_msg = document.querySelector("#computer_msg");
let userScore = document.querySelector("#user_score");
let computerScore = document.querySelector("#computer_score");
let userSign = document.querySelector("#moveU");
let computerSign = document.querySelector("#moveC");


let turnUser = 0;
let turnComputer = 0;
let s1 = 0;
let s2 = 0;
let signU = "";
let signC = "";


for(let btn of btns){
    btn.addEventListener("mouseenter", () => {
        btn.style.backgroundColor = "#FAD8D6";
    })
    btn.addEventListener("mouseleave", () => {
        btn.style.backgroundColor = "#CD5334";
    })
}

for(let i = 3; i< 6; i++){
    btns[i].disabled = true;
}

const user_turn = () => {

    for(let btn of btns){
        btn.addEventListener("click", () => {    
            if(btn.innerText == "Rock"){
                turnUser = 0;
            }
            else if(btn.innerText == "Paper"){
                turnUser = 1;
            }
            else{
                turnUser = 2;
            }
            game();
        })
    }
}

let win = [[0, 2], [1, 0], [2, 1]];

const checkUserSign = () => {

    if(turnUser == 0){
    signU = "Rock";
    }
    else if(turnUser == 1){
        signU = "Paper";
    }
    else{
        signU = "Scissors";
    }
}

const checkComputerSign = () => {

    if(turnComputer == 0){
    signC = "Rock";
    }
    else if(turnComputer == 1){
        signC = "Paper";
    }
    else{
        signC = "Scissors";
    }
}

const game = () => {

        turnComputer =  Math.floor(Math.random() * 3)
        console.log(turnComputer);
        checkUserSign();
        checkComputerSign();
        userSign.innerText = `Player Choose: ${signU}`;
        computerSign.innerText = `Computer Choose: ${signC}`;
        for(let pattern of win){
            if(turnUser == pattern[0] && turnComputer == pattern[1]){
                user_msg.innerText = `Player Wins! ${signU} beats ${signC}!`;
                computer_msg.innerText = `You lose! Better Luck Next Time`;
                s1++;
                userScore.innerText = `Score: ${s1}`;
                break;
            }
            else if(turnComputer == pattern[0] && turnUser == pattern[1]){
                computer_msg.innerText = `Computer Wins! ${signC} beats ${signU}!`;
                user_msg.innerText = `You lose! Better Luck Next Time`;
                s2++;
                computerScore.innerText = `Score: ${s2}`;
                
                break;
            }
            else{
                user_msg.innerText = `It's a Tie!`;
                computer_msg.innerText = "It's a Tie!";
            }
        }
}

user_turn();