import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import LineDivider from './components/LineDivider';
import wordList from '../src/components/5_letter_words.txt';

const App = () => {
  const [results, setResults] = useState([]);

  const filterWords = (included, excluded) => {
    fetch(wordList)
      .then((response) => response.text())
      .then((data) => {
        const words = data.split('\n').map((word) => word.trim());
        const filteredWords = words.filter((word) =>
          included.every((letter) => word.includes(letter)) &&
          excluded.every((letter) => !word.includes(letter))
        );
        setResults(filteredWords);
      });
  };

  return (
    <div className="App">
      <h1>Solvdle</h1>
      <SearchForm onSearch={filterWords} />
      <LineDivider />
      <SearchResults results={results} />
    </div>
  );
};

export default App;

