import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [includeLetters, setIncludeLetters] = useState('');
  const [excludeLetters, setExcludeLetters] = useState('');
  const [includedList, setIncludedList] = useState([]);
  const [excludedList, setExcludedList] = useState([]);

  const handleSearch = () => {
    const updatedIncluded = [...new Set([...includedList, ...includeLetters.split('')])];
    const updatedExcluded = [...new Set([...excludedList, ...excludeLetters.split('')])];
    setIncludedList(updatedIncluded);
    setExcludedList(updatedExcluded);
    onSearch(updatedIncluded, updatedExcluded);
    setIncludeLetters('');
    setExcludeLetters('');
  };

  const handleFinish = () => {
    setIncludedList([]);
    setExcludedList([]);
    onSearch([], []);
  };

  return (
    <div className="form-container">
      <div className="input-form">
        <input
          type="text"
          placeholder="Include letters"
          value={includeLetters}
          onChange={(e) => setIncludeLetters(e.target.value)}
        />
        <input
          type="text"
          placeholder="Exclude letters"
          value={excludeLetters}
          onChange={(e) => setExcludeLetters(e.target.value)}
        />
      </div>

      <div>
        <h3>Included Letters</h3>
        <div className="inc-exc">
          {includedList.map((letter, index) => (
            <button key={index} style={{ backgroundColor: 'green' }}>{letter}</button>
          ))}
        </div>

        <h3>Excluded Letters</h3>
        <div className="inc-exc">
          {excludedList.map((letter, index) => (
            <button key={index} style={{ backgroundColor: 'red' }}>{letter}</button>
          ))}
        </div>
      </div>

      <div className="search-buttons">
        <button type="button" onClick={handleSearch}>Search</button>
        <button type="button" onClick={handleFinish}>Danish</button>
      </div>
    </div>
  );
};

export default SearchForm;

