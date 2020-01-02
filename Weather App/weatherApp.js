//new data request
const openweather = new OpenWeather;
const ui = new UI;



window.addEventListener("load", () => {

  let city = "New York";

  console.log("hello");
  openweather.getWeather(city)
  .then(data => {
    console.log(data)

    ui.createPage(data.weather);
  })


  





})

 





   
 
