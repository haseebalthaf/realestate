import React from "react";
import "../style/browse.css";

const SearchBar = () => {
  return (
    <form className="searchForm" >
      <div className="itemContainer">
        <label htmlFor="type">Type of Property:</label>
        <select className="inputField" name="type" id="type">
          <option value="flat">Any</option>
          <option value="flat">Flat</option>
          <option value="house">House</option>
        </select>
        <br />

        <label htmlFor="beds">No of Bedrooms:</label>
        <select className="inputField" name="beds" id="beds">
          <option value="one">01</option>
          <option value="two">02</option>
          <option value="three">03</option>
          <option value="four">04</option>
          <option value="five">05</option>
        </select>
        <br />
        <label htmlFor="postal">Postal Code:</label>
        <input
          className="inputField"
          placeholder="BR1, NW1..."
          type="text"
          id="postal"
          name="postal"
        />
        <br />

        <label htmlFor="min-price">Min Price:</label>
        <input
          className="inputField"
          placeholder="£0"
          type="text"
          id="minPrice"
          name="minPrice"
        />
        <br />

        <label htmlFor="max-price">Max Price:</label>
        <input
          className="inputField"
          placeholder="£999,999"
          type="text"
          id="maxPrice"
          name="maxPrice"
        />
        <br />

        <label htmlFor="start">Start date:</label>
        <input
          className="inputField"
          type="date"
          id="start"
          name="startDate"
          defaultValue="2022-01-01"
        />

        <label htmlFor="end"> End date:</label>
        <input
          className="inputField"
          type="date"
          id="end"
          name="endDate"
          defaultValue="2024-01-01"
        />
        <br />

        <button className="filter" type="submit">
          Filter
        </button>
      </div>
    </form>
  );
};

export default SearchBar;