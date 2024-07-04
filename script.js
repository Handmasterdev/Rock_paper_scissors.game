let score_player = 0;
let score_robot = 0;

const choices_item = {
    rock: {
        rock:"draw",
        paper:"lose",
        scissors:"win",
    },
    paper: {
        rock:"win",
        paper:"draw",
        scissors:"lose",
    },
    scissors: {
        rock:"lose",
        paper:"win",
        scissors:"draw",
    },
};


function checkResult(input)
{
    let robot_choices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random()* 3) ;
    let robot_input = robot_choices[randomNum];
    let numplayer = 1

    const result =  choices_item[input][robot_input];

    calculateScore(result);

    console.log(score_player);

    document.getElementById(
        "robot_choise"
    ).innerHTML = `Computer choose:<b>${robot_input.toUpperCase()}</b>`;
    //user choices
    document.getElementById(
        "user_choices"
    ).innerHTML = `You choose:<b>${input.toUpperCase()}</b>`;
    //result
    document.getElementById(
        "result"
    ).innerHTML = `Result:<b>${result.toUpperCase()}</b>`
    //score player
    document.getElementById(
        "player"
    ).innerHTML = `You:<b>${score_player}</b>`
    //score robot
    document.getElementById(
        "robot"
    ).innerHTML = `Computer:<b>${score_robot}</b>`

}

function calculateScore(value){
    switch (value){
        case "win":
            score_player++;
            break;

        case "lose":
            score_robot++;
            break;
    }
}