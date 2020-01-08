var colors = [];
var pickedColorEasy;
var pickedColorHard;
var pickedColorFinal;
var displayTheColor = document.getElementById("displayTheColor");
var squares = document.querySelectorAll(".square");
var clickedColor;
var containerHead = document.querySelector(".containerhead");
var difficult = true;

var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");


function generateColors(){
  for(var i=0; i < squares.length; i++){
  //creates a random color
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
      //assigns bgColor to each of the squares
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    squares[i].style.backgroundColor = bgColor;
    //creates an array with all of the bg colors to use to check
    var pusher = squares[i].style.backgroundColor;
    colors.push(pusher);
  }
}

function generateWinner(){
    var difficultyChooser;
    if(difficult === true){
      pickedColorHard = colors[Math.floor(Math.random() * 6)];
      difficultyChooser = pickedColorHard;
    } else{
      pickedColorEasy = colors[Math.floor(Math.random() * 3)];
      difficultyChooser = pickedColorEasy;
    }
       // creates the winning color location in the array
       // assigns the winning color to the pickedFinal variable
     displayTheColor.innerHTML = difficultyChooser;
     pickedColorFinal = difficultyChooser;
    

}

function findTheWinner(){
      //find the clicked color
for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", function(){
    clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColorFinal){
      for(var k=0; k < squares.length; k++){
        squares[k].style.backgroundColor = pickedColorFinal;
      }
      containerHead.style.backgroundColor = pickedColorFinal;

          } else {
            this.style.backgroundColor = "grey";
     }
  })
}
}

  reset.addEventListener("click", function(){
    containerHead.style.backgroundColor = "white";

    generateColors();
    var removed = colors.splice(0,6)
    generateWinner();
    findTheWinner();
  })

  easy.addEventListener("click", function(){
    containerHead.style.backgroundColor = "white";
    easy.classList.add("gowhite");
    hard.classList.remove("gowhite");


    difficult = false;
    for(var i = 3; i < squares.length; i++){
      squares[i].classList.add("hide");
    }
    generateColors()
    var removed = colors.splice(0,6)
    generateWinner()
    findTheWinner()
    

  })
  
  hard.addEventListener("click", function(){
    containerHead.style.backgroundColor = "white";

    hard.classList.add("gowhite");
    easy.classList.remove("gowhite");


    difficult = true;
    for(var i = 0; i < squares.length; i++){
      squares[i].classList.remove("hide");
    }
    generateColors();
    var removed = colors.splice(0,6)
    generateWinner();
    findTheWinner();
  })



  if(difficult === false){
    easy.classList.add("gowhite");

    for(var i = 3; i < squares.length; i++){
      squares[i].classList.add("hide");
    }
    generateColors()
    console.log(colors);

    generateWinner()
    findTheWinner()

    for(var i = 0; i < squares.length; i++){
     
     
    }
  } else {
    hard.classList.add("gowhite");

    generateColors()

    generateWinner()
    findTheWinner()
    for(var i=0; i < squares.length; i++){
  
    };

  }



  










