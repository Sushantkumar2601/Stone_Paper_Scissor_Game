let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usersocrepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const genComputerchoice = () =>{
    const options = ["rock" , "paper","scissor"];
    const rndIdx =  Math.floor(Math.random()*3);
    return options[rndIdx];
}
const drawgame =() =>{
    msg.innerText = "Game is Draw Play again";
    msg.style.backgroundColor = " rgb(56, 52, 52)"
}

showWinner = (userwin,userchoice,compChoice)=>{
    if(userwin){
        userscore++;
        usersocrepara.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lose ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userchoice) =>{
 const compChoice = genComputerchoice();
 if(userchoice === compChoice){
    drawgame();
 }else{
     let userwin = true;
    if(userchoice === "rock"){
        //scissor or paper
        userwin = compChoice ==="paper"?false:true;

    }else if(userchoice === "paper"){
        userwin = compChoice ==="scissor"?false:true;
    }else{
        userwin = compChoice === "rock"?false:true;
    }
    showWinner(userwin , userchoice,compChoice);

 }
}

choices.forEach((event) =>{
    event.addEventListener("click",() =>{
        const userchoice = event.getAttribute("id");
        playgame(userchoice);
    })
})