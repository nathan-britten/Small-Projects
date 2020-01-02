class UI {

  constructor(){
    this.changeInput = document.querySelector("#change-container");
    this.button = document.querySelector("#changecity");
    this.weatherOutput = document.querySelector("#container");
  }

  createPage(data){

    const temperature = data.main.temp.toFixed(1);
    const feelsLike = data.main.feels_like.toFixed(1);
    const minimumTemp = data.main.temp_min.toFixed(1);
    const maxTemp = data.main.temp_max.toFixed(1);

    const fTemperature = (temperature * 1.8 + 32).toFixed(1);
    const fFeelsLike = (feelsLike * 1.8 + 32).toFixed(1);
    const fMinimumTemp = (minimumTemp * 1.8 + 32).toFixed(1);
    const fMaxTemp = (maxTemp * 1.8 + 32).toFixed(1);


     // ${(data.main.temp * 1.8 + 32).toFixed(1)}
  // (${(temperature * 1.8 + 32).toFixed(1)}°F)

    const output = 
    
    `
    <div id="top">
      <ul>
        <li class="upper"><h2>${data.name}, ${data.sys.country}</h2></li>
        <li class="upper caps"><h3>${(data.weather[0].description)}</h3></li>
        <li id="mainTemp" class="upper"><h3>Temp: ${temperature}°C </h3></li>
        <li><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></li>
      </ul>
    </div>

    <div id="bottom">
      <ul>
      <li class="lower" id="feelsLike">Feels Like: ${feelsLike}°C</li>
        <li class="lower" id="minTemp">Min Temp: ${minimumTemp}°C</li>
        <li class="lower" id="maxTemp">Max Temp: ${maxTemp}°C</li>
        <li class="lower" >Wind Speed: ${data.wind.speed} m/s</li>
        
        <li class="lower">Humidity: ${data.main.humidity}%</li>
      </ul>
    </div>

    <button id="changecity">Change City</button>
    <button id="changemeasurement">°F</button>

  

    `
    this.weatherOutput.innerHTML = output;

    const changeButton = document.querySelector("#changecity");
    
      changeButton.addEventListener("click", () => {

        
      ui.openChangeMenu();
      ui.giveButtonsPurpose();
 
  });

    const changeMeasure = document.querySelector("#changemeasurement");

    changeMeasure.addEventListener("click", () => {

      if(document.querySelector("#changemeasurement").innerHTML === "°F"){

        document.querySelector("#mainTemp h3").innerHTML = `Temp: ${fTemperature}°F`;
        document.querySelector("#feelsLike").innerHTML = `Feels Like: ${fFeelsLike}°F`;
        document.querySelector("#minTemp").innerHTML = `Min Temp: ${fMinimumTemp}°F`;
        document.querySelector("#maxTemp").innerHTML = `Max Temp: ${fMaxTemp}°F`;

        document.querySelector("#changemeasurement").innerHTML ="°C"
      }  else {

        document.querySelector("#mainTemp h3").innerHTML = `Temp: ${temperature}°C`;
        document.querySelector("#feelsLike").innerHTML = `Feels Like: ${feelsLike}°C`;
        document.querySelector("#minTemp").innerHTML = `Min Temp: ${minimumTemp}°C`;
        document.querySelector("#maxTemp").innerHTML = `Max Temp: ${maxTemp}°C`;

        document.querySelector("#changemeasurement").innerHTML ="°F"







      }
      

      
    })

    
  }

  openChangeMenu(){

    let all;
    
    document.querySelector("#container").classList.add("menuopenbackground");
    const generateMenu = `
    
    <div id="changemenu">
      <ul>
        <li><h3>Location</h3></li>
        <li><label for="cityChange">City</label></li>
        <li><input type="text" id="cityChange"></li>
      </ul>
      <button id="close">Close</button>
      <button id="savechanges">Save Changes</button>
    </div>
    
    `
    this.changeInput.innerHTML= generateMenu;
    document.querySelector("#changemenu").classList.remove("out");
    document.querySelector("#changemenu").classList.add("in");


    const inputBox = document.querySelector("#cityChange");


    ui.filterLocations();
  }

  
  



  

  giveButtonsPurpose(){


    

    const closeButton = document.querySelector("#close")
    closeButton.addEventListener("click", () =>{
      ui.closeChangeMenu();
      ui.filterLocations();
    })



    const saveChanges = document.querySelector("#savechanges");
      saveChanges.addEventListener("click", () => {
        
      



        openweather.getWeather(document.querySelector("#cityChange").value)
        .then(data => {
          console.log(data)
          ui.createPage(data.weather);
          ui.closeChangeMenu();

        })

      })



  }

  closeChangeMenu(){
    document.querySelector("#changemenu").classList.remove("in");
    // document.querySelector("#changemenu").classList.add("out");

    
  
   document.querySelector("#container").classList.remove("menuopenbackground");



    document.querySelector("#change-container").innerHTML= "";
  }

  filterLocations(data){

    let loc;





    




  };

  


}