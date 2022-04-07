import React, { useState } from "react";

export const SearchBar = ( { onFormSubmit }) => {
  const [term, setTerm] =useState("");

  /*const onInputChange = (event) => {
   setTerm(event.target.value);
  };*/ // This is an option JSX onChnage={onInputChange}

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term)
  };

  return (
    <div className=" search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
            type="text" 
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            />
          </div>
        </form>
    </div>
  );
};

export default SearchBar;