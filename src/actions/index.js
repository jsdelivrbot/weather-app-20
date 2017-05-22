import axios from 'axios';

const API_KEY = "c734e61245f30746e70667b1ffc9debc";
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
/*
`` : called as query string
*/


/*
Middleware has an ability to block, modify or just let pass through action as they are created before they hit REDUCER
MiddleWare can be treated as GateKeeper
*/ 

/*
In thiw way, we maintain consistency between action and reducer.
*/
export const FETCH_WEATHER = 'FETCH_WEATHER';


/*
This is our Action Creator. Action creator must return an ACTION.
*/

export function fetchWeather(city){ /*Whenever someone is going to call fetchWeather, they are going to pass cityName */
	const url = `${ROOT_URL}&q=${city},us`;
	const request  = axios.get(url);

	console.log('Request: ', request);  /*request will return a promise here*/

	return { /*This is an ACTION,Action is an object which ALWAYS has to have a TYPE*/
		type: FETCH_WEATHER,
		payload: request
	};
}

/*
PAYLOAD: the actual information or message in transmitted data, as opposed to automatically generated metadata.
Payload is an additional data that goes with ACTION that provides information that is required on that particular action.
*/