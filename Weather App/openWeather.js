class OpenWeather {


  constructor(){
    this.key = "e7ad35c0219cdebb8d7ae1e80e0a5397"
    
  }


  async getWeather(city){



    //fetch data
    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.key}&&units=metric`);
    //create json of data
    const weather = await weatherResponse.json();
    //return data




    return {
      weather
    }
  }

  async getLocation(){

    const locationresponse = await fetch("citylist.json");
    const location = await locationresponse.json(); 

    return{
      location
        }
    
  }


}

