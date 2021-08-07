import axios from 'axios';
import _ from 'lodash';
import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Loader from './components/Loader';
import Message from './components/Message';
import SectionNews from './components/SectionNews';
import SectionSearch from './components/SectionSearch';
import SectionWeather from './components/SectionWeather';

function App() {

  const [weatherInfo, setWeatherInfo] = useState({})
  const [searchQuery, setSearchQuery] = useState('Lucknow')
  const [newsSearchQuery, setNewsSearchQuery] = useState('Lucknow')

  const [showMessage, setShowMessage] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: searchQuery,
        appid: process.env.REACT_APP_WEATHER_API_KEY
      }
    }).then(res => {
      setNewsSearchQuery(searchQuery)
      setWeatherInfo(res.data)
      setLoading(false)
    }).catch(err => {
      setLoading(false)
      if(typeof err.response !== 'undefined' && err.response.status === 404) { showErrorMessage() }
    })
  }, [searchQuery])

  function showErrorMessage() {
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 2000)
  }

  return (
    <div className="App">
      <div className="hero">
        <Header />
        <SectionSearch submitQuery={(text) => setSearchQuery(text)} />
      </div>
      {loading ? (
        <Loader />
      ) : (
        !_.isEmpty(weatherInfo) && (
          <>
            <SectionWeather weatherInfo={weatherInfo} />
            <SectionNews searchLocation={newsSearchQuery}/>
          </>
        )
      )}
      <Message showMessage={showMessage} />
    </div>
  );
}

export default App;
