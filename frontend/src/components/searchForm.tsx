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
    <form className="search-form w-[350px] rounded-2xl bg-white focus-within:ring-[#00BFFF] ring-2 ring-opacity-50 relative">
  <input
    type="text"
    placeholder="Search..."
    maxLength={40}
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="search-input p-2 w-[300px] rounded-2xl outline-none"
  />
  <span className='w-[1px] h-[32px] bg-[#0F0F0F] bg-opacity-35 absolute translate-x-2 translate-y-1'></span>
  <button type="submit" className="search-button absolute translate-x-4 translate-y-1">
    <SearchIcon/>
  </button>
</form>

  );
};

export default SearchForm;