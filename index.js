let playerName
let min =1;
let max = 2;
let selectedNumber;
let playerPoint = 0;

function player (){
    playerName = prompt("Please enter your name");
  return playerName
  
}
  

function game(min, max) {
  player()
  selectedNumber = Math.floor(Math.random()* max) +1;
console.log('random' + selectedNumber)
  
    let guess = prompt(`Please guess a number between ${min} and ${max}`);

return guess
 
  
  
}

function Controller() {
  let number = game(min, max)
  console.log("guess" + number)

    if(parseInt(number) === selectedNumber){
max+=1
    playerPoint+=1

      console.log('max' +max)
      console.log('point' +playerPoint)
      game(min, max)
  } else {
      console.log("gameOver")
  }
}


console.log(Controller())
