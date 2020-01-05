///////////////this works but involves a lot of repetion///////////
/*

function playA(){

  let a = new Audio("sounds/boom.wav")
  a.play();
}
function playS(){

  let a = new Audio("sounds/clap.wav")
  a.play();
}
function playD(){

  let a = new Audio("sounds/hihat.wav")
  a.play();
}

window.addEventListener("keydown", e => {
 
 if(e.keyCode === 65){
   playA()
    document.getElementById("A").classList.add("playing");
    setTimeout(function(){
      document.getElementById("A").classList.remove("playing")
    },100)
  } 
  else if(e.keyCode === 83){
    playS()
    document.getElementById("S").classList.add("playing");
    setTimeout(function(){
      document.getElementById("S").classList.remove("playing")
    },100)
  } 
  else if(e.keyCode === 68){
    playD()
    document.getElementById("D").classList.add("playing");
    setTimeout(function(){
      document.getElementById("D").classList.remove("playing")
    },100)


  }
})
*/


window.addEventListener("keydown", e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(e)
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`#${e.key}`)
  
  key.classList.add("playing")

  setTimeout(function(){

    key.classList.remove("playing")

  },100)
  console.log(key)
})

window.addEventListener("click", e => {


  console.log(e.target.id)





  const audio = document.querySelector(`audio[data-key="${e.target.getAttribute("data-key")}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`#${e.target.id}`)
  
  key.classList.add("playing")

  setTimeout(function(){

    key.classList.remove("playing")

  },100)
  console.log(key)
})

/*f
a=65
s=83
d=68
f=70
g=71
h=72
j=74
k=75
l=76
*/