import React, { useState } from 'react';
import './App.css';
import Results from './components/Results'
import Pagination from './components/Pagination'

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const baseUrl = 'https://help-search-api-prod.herokuapp.com/search?query=';

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const enterSubmit = event => {
    if (event.key === 'Enter') {
      setSearchQuery(searchQuery);
      request(searchQuery);
    }
  };

  const submitSearch = (event) => {
    setSearchQuery(searchQuery);
    request(searchQuery);
  };

  const request = (searchQuery) => {
    (searchQuery === '') ? searchQuery = ' ' : searchQuery = searchQuery;

    const encodedSearchQuery = encodeURI(searchQuery);
    fetch(`${baseUrl}${encodedSearchQuery}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  };

  const getTotalResults = (items) => {
    return Object.keys(items).length
  };

  // Pagination
  const indexOfLastResult = currentPage * perPage;
  const indexOfFirstResult = indexOfLastResult - perPage;
  const currentResults = items.slice(indexOfFirstResult, indexOfLastResult);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <header >
        <div class="search-container" >
          <input
            class="search-input"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={enterSubmit}
          />
          <button
            class="search-button"
            type="submit"
            onClick={submitSearch}
          >Search</button>
        </div>
      </header>
      <div class="results-container">
        <Results
          results={currentResults}
          loaded={isLoaded}
          totalResults={getTotalResults(items)}
        />
      </div>
      <Pagination
        perPage={perPage}
        totalResults={getTotalResults(items)}
        paginate={paginate}
      />
    </div>
  );
}

export default App;