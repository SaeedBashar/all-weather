# All Weather

<img src="https://github.com/saeedbashar/all-Weather/blob/main/screenshots/lightMode.png?raw=true" Width="400" />
<img src="https://github.com/saeedbashar/all-Weather/blob/main/screenshots/darkMode.png?raw=true" Width="400" />

[View Demo]( https://saeedbashar.github.io/all-weather/ 'All-Weather')

## Features

- **Weather forecast for any city or place**
- **Extended 7 days forecast**
- **Conversion from Celcius to Fahrenheit conversion and vice versa**
- **Dark Mode**

## Getting Started

You need to get an API key from OpenWeatherMap by creating an account.
After you got your API key, create a **.env** file at root directory of project, copy the line below to the file and replace YOUR_KEY with your OpenWeatherMap API Key.

```
REACT_APP_OPENWEATHER_URL = https://api.openweathermap.org/data/2.5
REACT_APP_OPENWEATHER_KEY = API_KEY
```

Finally clone this repository, install dependencies and run the local server

```bash
git clone https://github.com/SaeedBashar/all-weather.git
```

```bash
cd all-weather
npm install
npm start
```

## Credits

[OpenWeatherMap](https://openweathermap.org/ 'OpenWeatherMap') (Weather data API)