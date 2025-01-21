let userScore=0;
let compScore=0;
let userWin=true;
const userScorePara=document.querySelector("#userScore");
const compScorePara=document.querySelector("#compScore");
const msg=document.querySelector("#msg");


const choices= document.querySelectorAll(".choice");
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    UserGenScore(userChoice);
});
});
const CompGenScore= () => { 
    let options=["rock","paper","sci"];
    let comOption=Math.floor(Math.random()*3);
    return options[comOption];

}

const UserGenScore= (userChoice)=>{
    console.log("User score",userChoice);
    const compChoice=CompGenScore();
    console.log("Computer choice",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else {
        if(userChoice==="rock"){
            //paper,sci
            userWin=compChoice==="paper" ? false:true;
        } else if(userChoice==="paper"){
            //rock,sci
            userWin=compChoice==="rock" ? true:false;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock" ? false:true; 
        }
        showWinner(userWin);

        }

     


}

const showWinner=(userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
        msg.style.color="white";
        console.log("win");
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
        msg.style.color="white";
        console.log("lose");
    }
}
const drawGame = () =>{
    msg.innerText="Game draw!! Play again.";
    msg.style.backgroundColor="darkorange";
    console.log("draw");
};
