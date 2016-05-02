app.controller('WeatherController', function(WeatherService){
	var wc = this;
	wc.degrees = "F";
	
	WeatherService.getWeather().then(function(weather){
		wc.weather = weather;
	}).then(function(){
		wc.temp = Math.floor(1.8 * (wc.weather.main.temp - 273) + 32)});
	// DO NOT EDIT ABOVE
	
	wc.convertToC = function(){
		wc.temp = Math.floor(wc.weather.main.temp - 273.15);
		wc.showF = true;
	};
	
	wc.toggleTemp = function(){
		if (wc.degrees === "F"){
			wc.temp = Math.floor(1.8 * (wc.weather.main.temp - 273) + 32);
			wc.degrees = "C";
		}
		else {
			wc.temp = Math.floor(wc.weather.main.temp - 273.15);
			wc.degrees = "F";
		}
	};
	
	
	
})