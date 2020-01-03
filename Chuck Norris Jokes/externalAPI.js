// http://api.icndb.com/jokes/random/

document.querySelector("#generateJoke").addEventListener("click", check);

function check (){

  if(document.querySelector("#numberOfJokes").value === ""){
    getTheJoke();
  } else {
    getTheJokes();
  }
}

function getTheJoke(){
  // create a new variable to hold the request

  const xhr = new XMLHttpRequest();
  // open the request with the type, location and whether you want it to load asynchronously
  xhr.open("GET", 'http://api.icndb.com/jokes/random/', true);


  //when the request loads, check to see if the status is 200 or not.
  xhr.onload = function (){
    if(this.status === 200){

      // create a parsed variabl that holds the response text
      const jokes = JSON.parse(this.responseText);
      console.log(jokes.value.joke)
    
       const output = `
        <ul>
          <li class="formatting">${jokes.value.joke}</li>
        </ul>
        `;
        console.log(output)
        document.querySelector(".output").innerHTML = output 

    }

  };

  //this sends the quest
  xhr.send();
 
}

function getTheJokes(){

  const num = "http://api.icndb.com/jokes/random/" + document.querySelector("#numberOfJokes").value;
  console.log(num)
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${num}`, true);

  xhr.onload = function (){
    if(this.status === 200){

      const jokes = JSON.parse(this.responseText);
      jokeArray = jokes.value
      console.log(jokeArray)
      let output = ``;
      jokeArray.forEach(function(jk){

        output += `
            <ul>
            <li class="formatting">${jk.joke}</li>
          </ul>
        `;

      })

        document.querySelector(".output").innerHTML = output 

    }

  };
  xhr.send();
 
}