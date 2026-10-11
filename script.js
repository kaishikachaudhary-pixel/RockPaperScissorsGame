// variable initialisation
let userScore = 0;
let compScore = 0;

// accessing the elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreMsg = document.querySelector("#user-score");
const compScoreMsg = document.querySelector("#comp-score");

// function if the game draws 
const drawGame = () =>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
}


// function if any of the one wins
const showWinner = (userWin) =>{
    if(userWin === true){
        userScore++;
        userScoreMsg.innerText = userScore;
        msg.innerText="You Won !!";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScoreMsg.innerText = compScore;
        msg.innerText="You lose !!";
        msg.style.backgroundColor="red";
    }
}

// function to generate eh computer choice
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    let index = Math.floor(Math.random() * 3);  // to get a random number between 0 to 2 coz we can use it as an index to our array 
    // in order to generate a number in a range you can multiply the math.random unction to a number so range would become (0,number-1);
    return options[index];
}

// function to start playing the game
const playGame = (userChoice) => {
    // Generate Computer Choice
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false :true;
        }else{
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin);
    }
}

// function to chck the user's choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})