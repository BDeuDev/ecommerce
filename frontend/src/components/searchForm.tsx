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
        maxLength={40}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input p-2 w-[350px] rounded-2xl"
      />
      <span className='w-[0.5px] h-[32px] bg-[#0F0F0F] absolute -translate-x-12 translate-y-1'></span>
      <button type="submit" className="search-button absolute -translate-x-8 translate-y-1">
        <SearchIcon/>
      </button>
    </form>
  );
};

export default SearchForm;