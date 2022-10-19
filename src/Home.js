/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export default function Home(props) {

    const [ countries, setCountries] = React.useState()
    const [ filters, setFilters] = React.useState({
        'name': '',
        'region': ''
    })


    React.useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then( res => res.json() )
        .then( data => setCountries(data) )
    },[])

    if (!countries) {
        return (<h3 className='loading'>Page is loading</h3>)
    }

    const countriesReduced = countries.map( country => {
        return {
            "name": country.name,
            "population": country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            "region": country.region,
            "capital": country.capital,
            "flag": country.flag
        }
    })

    const filteredCountries = countriesReduced.filter((country) => {
        return (
        country.name.toLowerCase().includes(filters.name.toLowerCase()) 
        && country.region.toLowerCase().includes(filters.region.toLowerCase())
        )
    })

    function handleChange(e) {
        setFilters((prevValue) => {
            return {
                ...prevValue,
                [e.target.name]: e.target.value
            }
        })
    }

    const darkMode = props.darkmode

    console.log(darkMode)

    const countryRender = filteredCountries.map(country => {
        return (
            <div key={country.name} className={`card ${darkMode}`}>
                <a href={`./name/${country.name}`} style={{"display": "block"}}>
                    <div className='country-card'>
                        <img src={country.flag} alt='Country Flag' className={`country-flag ${darkMode}`} width="250px" height="200px" style={{"objectFit": "cover"}}/>
                        <h2 className={`country-card-name ${darkMode}`}>{country.name}</h2>
                        <p className={`country-card-info ${darkMode}`}><b>Population:</b> {country.population}</p>
                        <p className={`country-card-info ${darkMode}`}><b>Region:</b> {country.region}</p>
                        <p className={`country-card-info ${darkMode}`}><b>Capital:</b> {country.capital}</p>
                    </div>
                </a>
            </div>
        )
    })


    return (
        <div>
            <form className='filters'>
                <input type='text' className={`search-filter ${darkMode}`} placeholder='Search for a country...' onChange={handleChange} name='name'/>
                <select name='region' id='region-filter' className={`region-filter ${darkMode}`} onChange={handleChange}>
                    <option value='' defaultChecked>Filter by Region</option>
                    <option value='Africa'>Africa</option>
                    <option value='America'>America</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>
            </form>
            <div className='grid'>
                {countryRender}
            </div>
        </div>
    )
}