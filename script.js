let player, winner = null;
let selectedPlayer = document.getElementById('selectedPlayer')
let selectedWinner = document.getElementById('selectedWinner'); 

changePlayer(getRandomLetters());

function chooseSquare(id){
  
    if(winner !== null) {
        return;
    }

    let square = document.getElementById(id);
    if(square.innerHTML !== '-') {
        return;
    }

    square.innerHTML = player;
    square.style.color = '#000';

    if (player === 'X') {    
        player = 'O';
    }
    else
    {
        player = 'X';
    }
    
    changePlayer(player);
    checkWinner();
}

function changePlayer(value){
    player = value;
    selectedPlayer.innerHTML = player;
}

function checkWinner(){
  let square1 = document.getElementById(1);
  let square2 = document.getElementById(2);
  let square3 = document.getElementById(3);
  let square4 = document.getElementById(4);
  let square5 = document.getElementById(5);
  let square6 = document.getElementById(6);
  let square7 = document.getElementById(7);
  let square8 = document.getElementById(8);
  let square9 = document.getElementById(9);

  if(checkSequence(square1, square2, square3)){
    changeSquareColor(square1, square2, square3);
    changeWinner(square1);
    return;
  }

  if(checkSequence(square4, square5, square6)){
    changeSquareColor(square4, square5, square6);
    changeWinner(square4);
    return;
  }

  if(checkSequence(square7, square8, square9)){
    changeSquareColor(square7, square8, square9);
    changeWinner(square7);
    return;
  }

  if(checkSequence(square1, square4, square7)){
    changeSquareColor(square1, square4, square7);
    changeWinner(square1);
    return;
  }

  if(checkSequence(square2, square5, square8)){
    changeSquareColor(square2, square5, square8);
    changeWinner(square2);
    return;
  }

  if(checkSequence(square3, square6, square9)){
    changeSquareColor(square3, square6, square9);
    changeWinner(square3);
    return;
  }

  if(checkSequence(square1, square5, square9)){
    changeSquareColor(square1, square5, square9);
    changeWinner(square1);
    return;
  }

  if(checkSequence(square3, square5, square7)){
    changeSquareColor(square3, square5, square7);
    changeWinner(square3);
  }
}

function changeWinner(square){
    winner = square.innerHTML;
    selectedWinner.innerHTML = winner;
}

function changeSquareColor(square1, square2, square3){
    square1.style.color = '#0F0';
    square2.style.color = '#0F0';
    square3.style.color = '#0F0';
}

function checkSequence(square1, square2, square3){

    var isEqual = false;

    if(square1.innerHTML !== '-' &&
       square1.innerHTML === square2.innerHTML && 
       square2.innerHTML === square3.innerHTML){

       isEqual = true;   
    }

    return isEqual;
}

function restart(){
     winner = null;
     selectedWinner.innerHTML = '';

   
     for(let i = 1; i <=9 ; i++){
         let square = document.getElementById(i);
         square.style.color = '#FFF';
         square.innerHTML = '-';       
    }
    
     
    document.body.style.backgroundImage = "url('tic-tac-toe.png')";

    changePlayer(getRandomLetters());

}

function getRandomLetters(){

   var chars = 'OX';
   var randomString = '';
   for ( var i = 0; i < 1; i++ ) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomString += chars.substring(rnum, rnum+1);
   }
   return randomString;
}

