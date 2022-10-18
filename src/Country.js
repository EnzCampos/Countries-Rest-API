/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Country() {

    const { country, code } = useParams()
    const [ countryData, setCountryData ] = React.useState()

    var restCountriesUrl = code ? `https://restcountries.com/v2/alpha/${code}` : `https://restcountries.com/v2/name/${country}`


    React.useEffect(()=>{
        fetch(restCountriesUrl)
        .then( res => res.json() )
        .then( data => setCountryData(data) )
    },[])

    if (!countryData) {
        return (<h3>Page is loading</h3>)
    }

    const { name, borders, nativeName, currencies, languages, capital, region, population, subregion, topLevelDomain, flag } = code ? countryData : countryData[0]

    let borderCountries = borders.map(elem => {
        return (
            <a href={`../code/${elem}`} key={elem} className="border-country-link">{elem}</a>
        )
    })

    return (
        <div className='main'>
            <a href='..' style={{"display": "block"}}>
                <p className='homepage'> {"<- Back"}</p>
            </a>
            <div className='country-content'>
                <section>
                    <img src={flag} alt='Country Flag' className='country-flag' width="800px"/>
                </section>
                <div className='country-f'>
                    <h1 className='country-name'>{name}</h1>
                    <div className='country-info'>
                        <p><b>Native Name:</b> {nativeName}</p>
                        <p><b>Population:</b> {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        <p><b>Region:</b> {region}</p>
                        <p><b>Sub Region:</b> {subregion}</p>
                        <p><b>Capital:</b> {capital}</p>
                        <p><b>Top Level Domain:</b> {topLevelDomain.toString()}</p>
                        <p><b>Currencies:</b> {currencies.map(currency => currency.name)}</p>
                        <p><b>Languages:</b> {(languages.map(lang => lang.name)).toString()}</p>
                    </div>
                    <div className='border-countries'>
                        <h3 className='borders'>Border Countries:</h3>
                        {borderCountries}
                    </div>
                </div>
            </div>
        </div>
    )
}