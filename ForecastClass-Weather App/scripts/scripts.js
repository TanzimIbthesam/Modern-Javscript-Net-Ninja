//its for DOM Manipulation forcasts.js is for manipulating APIS
const cityform=document.querySelector('form');

const card=document.querySelector('.card');
const details=document.querySelector('.details');

const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');

const forecast=new Forecast();

 const updateUI=(data)=>{
  // const cityDets=data.cityDets;
  // const weather=data.weather;
  //update details template
  //destructure properties
  //syntax to destructure properties from a data
  const { cityDets,weather}=data;
  details.innerHTML=`
  <h5 class="my-3">${cityDets.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  `
  ;
  //update the night and day and icon images
  // const iconSrc=`img/icons/${weather.WeatherIcon}.svg`;
  // icon.setAttribute('src',iconSrc);
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
  let timeSource=weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
 
time.setAttribute('src',timeSource);
  //remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.add('d-block');
  }
 }



cityform.addEventListener('submit',e=>{
    
e.preventDefault();
//getCityValue
const city=cityform.city.value.trim();
cityform.reset();

//Update UI with new City
forecast.updateCity(city)
//when the promise resolves we update it 
.then(data=>updateUI(data))
.catch(err=>console.log(err));
//set LocalStorage
localStorage.setItem('city',city);
//the location stored will be the latest one cause everytime  a user is updating the property it override the old one
//We will check if there is a city in localstorage when a user first lands on a page
//if we do we have to take that city and make an API call to update the city and show that in browser


});
if(localStorage.getItem('city')){
  forecast.updateCity(localStorage.getItem('city'))
  .then(data =>updateUI(data))
  .catch(err=>console.log(err));
}
// const result=true?'valuetwo':'valueone';
// console.log(result);