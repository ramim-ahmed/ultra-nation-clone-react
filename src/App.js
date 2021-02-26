import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';
import CountryAdd from './components/Country/CountryAdd/CountryAdd';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([])

  useEffect( () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then( res => res.json())
    .then( data => setCountries(data))
  }, [])

  const countryHandlr = (countryArray) => {
    const newCountry = [...country, countryArray];
    setCountry(newCountry)
  }

  return (
    <div className="App">
      <h1>Ultra Nation React</h1>
      <h3> 
        Country Loaded : {countries.length}
      </h3>
      <h1> All Country List </h1>
      <CountryAdd country = {country}/>
      <div>
        {
          countries.map( country => <Country
              key = {country.alpha3Code}
             country = {country}
             countryHandlr = {countryHandlr}
             />)
        }
      </div>
    </div>
  );
}

export default App;
