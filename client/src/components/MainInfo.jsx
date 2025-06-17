import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import axios from 'axios';

function MainInfo() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://claimate-x7ry.onrender.com/`); // replace with your ngrok URL
                console.log('Backend response:', response.data);
                setWeather(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    return (
    <div className='flex flex-col p-4 h-full'>
        <div className='flex gap-2 items-center text-white'>
            <FaLocationDot />
            {weather && weather.location ? weather.location.name : 'Loading...'}
        </div>
        <div className='flex justify-between mt-auto items-center'>
            <div>
                <div className='text-4xl text-white'>{weather ? weather.current.condition.text : 'Loading...'}</div>
                <div className='flex gap-6 text-white'>
                    <div>{weather ? new Date(weather.location.localtime).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : 'Loading...'}</div>
                    <div>{weather ? new Date(weather.location.localtime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : 'Loading...'}</div>
                </div>
            </div>
            <div className='text-4xl text-white'>{weather ? weather.current.temp_c + '°C' : 'Loading...'}</div>
        </div>
    </div>
  )
}

export default MainInfo