import React, { useState } from 'react';
/* 
interface SearchFormProps {
  onSubmit: (query: string) => void;
} */

const SearchForm: React.FC/* <SearchFormProps> */ = (/* { onSubmit } */) => {
  const [query, setQuery] = useState('');

 /*  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(query);
  }; */

  return (
    <form /* onSubmit={handleSubmit} */ className="search-form">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;