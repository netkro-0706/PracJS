// ==랜덤번호 지정
// 유저가 번호 입력 -> 그리고 go 라는 버튼을 누름
// 만약 유저가 랜덤 번호를 맞추면, 맞췄습니다.
// 랜덤 번호가 < 유저번호 down
// 랜덤 번호가 > 유저번호 Up
// reset 버튼 누르면 게임이 리셋
// 5번의 기회를 다쓰면 게임이 끝(버튼 disable)
// 유저가 1~100범위 밖에 숫자를 입력하면 알려줌 기회 안깎음
// 유저가 이미 입력한 숫자를 입력시 알려줌 기회 안깎음

let computerNum = 0;
let playButton = document.getElementById("playButton");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
let resetButton = document.getElementById("resetButton");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chanceArea");
let history=[];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value="";
})

function pickRandomNumber(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답 :", computerNum);
}

function play(){
    let userValue = userInput.value;

    if(userValue<1 || userValue>100 ){
        resultArea.textContent="1과 100사이의 숫자를 입력하시오.";
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다.";
        return;
    }

    chances--;
    chanceArea.textContent = `남은 기회: ${chances}번`
    if(userValue<computerNum){
        resultArea.textContent = "UP!!";
    } else if (userValue>computerNum){
        resultArea.textContent = "DOWN!!";
    } else if(userValue==computerNum){
        resultArea.textContent = "정답!!";
        gameOver=true;
    }

    history.push(userValue);

    if(chances<1){
        gameOver=true;
    }
    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    userInput.value = "";
    pickRandomNumber();
    resultArea.textContent = "결과값이 여기에 나옵니다.";
}


pickRandomNumber();
