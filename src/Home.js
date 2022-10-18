/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export default function Home() {
    const [countries, setCountries] = React.useState()

    React.useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then( res => res.json() )
        .then( data => setCountries(data) )
    },[])

    if (!countries) {
        return (<h3>Page is loading</h3>)
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

    const countryRender = countriesReduced.map(country => {
        return (
            <div key={country.name} className='card'>
                <a href={`./name/${country.name}`}>
                    <div className='country-card'>
                        <img src={country.flag} alt='Country Flag' className='country-flag' width="250px" height="170px"/>
                        <h2 className='country-card-name'>{country.name}</h2>
                        <p className='country-card-info'><b>Population:</b> {country.population}</p>
                        <p className='country-card-info'><b>Region:</b> {country.region}</p>
                        <p className='country-card-info'><b>Capital:</b> {country.capital}</p>
                    </div>
                </a>
            </div>
        )
    })

    return (
        <div class='grid'>
            {countryRender}
        </div>
    )
}