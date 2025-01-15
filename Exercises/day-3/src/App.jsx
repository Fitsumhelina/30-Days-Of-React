import  { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css'; // Ensure Tailwind CSS is included

const fetchData = async () => {
    const url = "https://restcountries.com/v2/all";
    const response = await fetch(url);
    const countries = await response.json();
    return countries;
}

const Generate = ({ countries }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {countries.map((country, index) => (
                <div key={index} className="border p-4 rounded shadow-lg">
                    <img className="w-full h-32 object-cover" src={country.flag} alt={country.name} />
                    <h1 className="text-xl font-bold mt-2">{country.name}</h1>
                    <h2 className="text-lg">{country.languages.map(lang => lang.name).join(', ')}</h2>
                    <h3 className="text-md">Population: {country.population.toLocaleString()}</h3>
                    <h3 className="text-md">Currency: {country.currencies.map(curr => curr.name).join(', ')}</h3>
                </div>
            ))}
        </div>
    )
}

Generate.propTypes = {
    countries: PropTypes.array.isRequired,
};

function App() {
    const [countries, setCountries] = useState([]);

    const handleGenerate = async () => {
        const countriesData = await fetchData();
        setCountries(countriesData);
    }

    return (
        <div className="container mx-auto p-4">
            <button 
                onClick={handleGenerate} 
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
                Generate
            </button>
            <Generate countries={countries} />
        </div>
    );
}

export default App;