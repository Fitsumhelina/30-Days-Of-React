import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

function App() {
  // State to store the list of countries
  const [countries, setCountries] = useState([]);
  // State to store the selected country
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Fetches country data from API when the component mounts
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  // Selects a random country from the fetched data
  const selectRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setSelectedCountry(countries[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-100 text-gray-800 p-5">
      {/* Header Section */}
      <header className="w-full text-center py-5 bg-blue-500 text-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold">30 Days Of React</h1>
        <p className="text-lg">Getting Started React</p>
      </header>
      
      {/* Main Content Section */}
      <main className="flex flex-col items-center mt-10">
        {selectedCountry && (
          <div className="bg-white p-5 rounded-lg shadow-lg text-center w-80">
            {/* Display country flag */}
            <img className="w-full h-40 object-cover rounded-md" src={selectedCountry.flag} alt={selectedCountry.name} />
            {/* Display country details */}
            <h2 className="text-xl font-bold mt-3">{selectedCountry.name.toUpperCase()}</h2>
            <p className="text-md"><strong>Capital:</strong> {selectedCountry.capital}</p>
            <p className="text-md"><strong>Languages:</strong> {selectedCountry.languages.map(lang => lang.name).join(', ')}</p>
            <p className="text-md"><strong>Population:</strong> {selectedCountry.population.toLocaleString()}</p>
            <p className="text-md"><strong>Currency:</strong> {selectedCountry.currencies.map(curr => curr.name).join(', ')}</p>
          </div>
        )}
        {/* Button to select a random country */}
        <button onClick={selectRandomCountry} className="mt-5 px-5 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">Select Country</button>
      </main>
      
      {/* Footer Section */}
      <footer className="mt-auto py-3 text-center w-full bg-gray-200 text-gray-600">
        <p>Copyright 2020</p>
      </footer>
    </div>
  );
}

export default App;
