import axios from 'axios';

const API_KEY = "c734e61245f30746e70667b1ffc9debc";
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

/*
Middleware has an ability to block, modify or just let pass through action as they are created before they hit REDUCER
MiddleWare can be treated as GateKeeper
*/ 

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},in`;
	const request  = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}