import React from 'react';
const Country = (props) => {
    const {name, area, capital, population, region, flag} = props.country;
    const countryHandlr = props.countryHandlr;
    const flagStyle = {
        height : '100px'
    }
    const countryStyle = {
        border: '1px solid gray',
        padding : '10px',
        margin : '20px'
    }
    return (
            <div style={countryStyle}>    
                    <img style={flagStyle} src={flag} alt=""/>
                    <h3>Name: {name} </h3>
                    <p>Area: {area} </p>
                    <p>Capital: {capital} </p>
                    <p>Population: {population} </p>
                    <p>Region: {region} </p>
                    <button onClick = { () => countryHandlr(props.country) } >Add Country</button>
            </div>
    );
};

export default Country;