import React from 'react'

function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('this was clicked!');
  }

  return (
    <form className="search-engine" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="Type city here"
          // onChange={updateCity}
        />
      </label>
      <input type="submit" value="Submit" className="search-button" />
    </form>
  )
}

export default SearchForm