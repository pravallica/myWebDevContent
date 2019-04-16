"use strict";

// search button meeda jarige event ki event listener assign chestham
searchButton.addEventListener('click',searchWeather);

// creating a function
function searchWeather() {
// console.log(searchCity.value); //searchCity lo user enter chesina value ni display chey ani chepthunam[.valu anedhi inbuilt property]
var cityName=searchCity.value; // saving the above displayed cityname to a variable
if (cityName.trim().length == 0){ //cityName==0 teskunte oka blank space ichina alert radhu, so trim use chesi blank spaces ki kuda alert ivali
    return alert("Please enter a city name");
}
var http = new XMLHttpRequest();
var apiKey='4927aa054c36e8b2216844b1221a333d';
var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityName;
var method = 'GET';
http.open(method,url);
http.onreadystatechange = function(){
    if(http.readyState == XMLHttpRequest.DONE && http.status === 200){
        var data = JSON.parse(http.responseText);
    } else if(http.readyState == XMLHttpRequest.DONE && http.status !== 200)
        {
            alert('Error');
        }
};

}

