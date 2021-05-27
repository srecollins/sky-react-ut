import React from 'react';

const Results = ({ results, loaded, totalResults }) => {
  if (!loaded) {
    return (
      <div>
        <h2>Enter a Search Query Above...</h2>
        <p>Enter a search term in the box above, and then hit either enter or the search button!</p>
      </div>
    );
  }

  return (
    <div class="results">
      <h1 class="results-header">Your search returned {totalResults} Results:</h1>
      {results.map((result) => (
        <div class="single-result">
          <h1>{result.title}</h1>
          <h2><a href={result.url} target="_blank" rel="noreferrer">{result.url}</a></h2>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;