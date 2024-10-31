import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="results-container">
      {results.length > 0 ? (
        <div className="results-grid">
          {results.map((word, index) => (
            <div key={index} className="word">
              {word}
            </div>
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;

