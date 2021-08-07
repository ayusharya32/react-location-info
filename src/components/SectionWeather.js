import moment from 'moment';

function SectionWeather({ weatherInfo }) {
    const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`

    const { temp, feels_like, pressure, humidity} = weatherInfo.main

    function tempFromKelvinToCelcius(temp) {
        return (temp - 273.15).toFixed(1)
    }

    return (
        <section className="section-weather">
            <div className="container">
                <div className="weather-card">
                    <header>
                        <h1>Current Weather</h1>
                        <p>{moment().format('hh:mm a, MMMM DD')}</p>
                    </header>
                    <div className="city-container">
                        <div>
                            <h1 className="city-name">{weatherInfo.name}</h1>
                            <p className="description">{weatherInfo.weather[0].description}</p>
                        </div>
                        <img className="weather-img" src={iconUrl} alt="icon-weather" />
                    </div>
                    <div className="weather-details-container">
                        <h1>{tempFromKelvinToCelcius(temp)} &deg;C</h1>
                        <table className="table-details">
                            <tbody>
                                <tr>
                                    <td>Feels Like</td>
                                    <td className="row-value">
                                        {tempFromKelvinToCelcius(feels_like)} &deg;C
                                    </td>
                                </tr>
                                <tr>
                                    <td>Wind</td>
                                    <td className="row-value">{weatherInfo.wind.speed} m/s</td>
                                </tr>
                                <tr>
                                    <td>Humidity</td>
                                    <td className="row-value">{humidity}%</td>
                                </tr>
                                <tr>
                                    <td>Precip</td>
                                    <td className="row-value">16</td>
                                </tr>
                                <tr>
                                    <td>Pressure</td>
                                    <td className="row-value">{pressure} hPa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionWeather
