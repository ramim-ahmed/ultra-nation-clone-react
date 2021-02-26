import React from 'react';

const CountryAdd = (props) => {
    const country = props.country;
    const totalPopulation = country.reduce( (total, country) => total + country.population, 0 )
    return (
        <div>
            <h3> Country Add : {country.length} </h3>
            <h3> Total Population : {totalPopulation} </h3>
        </div>
    );
};

export default CountryAdd;