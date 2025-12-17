import { useState, useRef, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <div className={`search ${open ? 'open' : ''}`}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Поиск"
        className="search-input"
      />

      <button
        className="search-btn"
        onClick={() => setOpen(prev => !prev)}
      >
        {    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="25px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        opacity="0.1"
        d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        fill="#323232"
      />
      <path
        d="M15 15L21 21"
        stroke="#323232"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        stroke="#323232"
        stroke-width="2"
      />
    </svg>}

      </button>
    </div>
  );
}

export default SearchBar