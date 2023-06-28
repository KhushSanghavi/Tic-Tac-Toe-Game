console.log("Welcome to Tic Tac Toe");
// initilizing everything needed
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn
// this says if turn is x then 0 will come else x will come its ternary operator
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    //index 0 to 2 is the possible values that says about x and 0  
    // after index 3 to 5 we are giving the value of translate x,translate yand rotation degree
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      //as initialy all will be blanked so we dont want blank to win thats why the below condition
      boxtext[e[0]].innerText !== ""
    ) {
      // change info .innertext to boxtext[e[0]].innertext means it would be x or y and conca tenate with won do isgameover=true,show that line ,show the image
      document.querySelector(".info").innerText =boxtext[e[0]].innerText + " Won";
      isgameover = true;
      document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "20vw";
    }
  });
};

// Game Logic
// music.play()

//created a onclick listener on all the boxes
let boxes = document.getElementsByClassName("box");
// arrays.from because it will return an HTML collection as we want to use forEach and it runs only on array
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    //this says that if the innertext if the boxtext is empty then it will be turn
    //now chnge the turn ,play a short audio and evry time when one will click it will check whther it is winner or not
    //and if the game is not over then just change the text to turn for x or y
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn(); //function
      audioTurn.play();
      checkWin(); //function
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
//so when one clicks it then all the boxtexts unnnertext should be made empty
// then turn will be  X as starting from again ,make isgameover false ,
// the line should go away as well as the img should go away
//and also the innertext of turn for should be x
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
