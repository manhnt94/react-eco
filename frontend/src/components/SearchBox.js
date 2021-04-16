import React, { useState } from "react";

export default function SearchBox(props) {
  const [text, setText] = useState("");

  const handleSearchForm = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${text}`);
  };

  return (
    <form className="search flex items-center" onSubmit={handleSearchForm}>
      <div className="row">
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="submit">
          <i className="fa fa-search ml-2 text-white"></i>
        </button>
      </div>
    </form>
  );
}
