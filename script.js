let strikeButton=document.getElementById("strike")
let resetButton=document.getElementById("reset")

let scoreTeam1=document.getElementById("score-team1")
let wicketTeam1=document.getElementById("wickets-team1")

let scoreTeam2=document.getElementById("score-team2")
let wicketTeam2=document.getElementById("wickets-team2")

let team1Score=0
let team2Score=0
let team1Wickets=0
let team2Wickets=0
let team1Ball=0
let team2Ball=0

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

let turn=1

let possibleOutcomes=[0,1,2,3,4,6,"W"]

function updateScore(){
    scoreTeam1.textContent=team1Score
    wicketTeam1.textContent=team1Wickets
    scoreTeam2.textContent=team2Score
    wicketTeam2.textContent=team2Wickets
}

function gameOver(){
    gameOverAudio.play()
    if(team1Score>team2Score) alert("IND wins")
    if(team2Score>team1Score) alert("PAK wins")
    if(team1Score==team2Score) alert("It is another super over!")
}

function resetGame(){
    window.location.reload()
}

resetButton.addEventListener("click",function(){
    resetGame()
})

function strikeGame(){
    strikeAudio.play()
    let randomElements=possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]

    if(turn==1){
        team1Ball++
        document.querySelector(`#team1-superover div:nth-child(${team1Ball})`).textContent=randomElements

        if(team1Ball==6||team1Wickets==2){
            turn=2
        }
        if(randomElements=="W"){
            team1Wickets++
        }
        else{
            team1Score+=randomElements
        }
    }

    if(turn==2){
        team2Ball++
        document.querySelector(`#team2-superover div:nth-child(${team2Ball})`).textContent=randomElements

        if(team2Ball==6||team2Wickets==2||team2Score>team1Score){
            turn=3
            gameOver()
        }
        if(randomElements=='W'){
            team2Wickets++
        }
        else{
            team2Score+=randomElements
        }
    }
    updateScore()

}

strikeButton.addEventListener("click",function(){
    strikeGame()
})