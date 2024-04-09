import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
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
    <form /* onSubmit={handleSubmit} */ className="search-form ">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input p-2 w-[350px] rounded-2xl"
      />
      <button type="submit" className="search-button absolute">
        <SearchIcon/>
      </button>
    </form>
  );
};

export default SearchForm;