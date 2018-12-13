import React from "react";
import "./SearchBox.css";



const SearchBox = props => (
    <form className="search">
        <div className="form-group">
            <label htmlFor="breed">Breed Name: </label>
            <input
                id="breed"
                className="form-control"
                placeholder="What breed are you looking for?"
                name="breed"
                list="breeds"
                type="text"
                value={props.value}
                onChange={props.handleInputChange}
            />
            
            <datalist id="breeds">
                {props.breeds.map(breed => <option value={breed} key={breed} />)}
            </datalist>
            <br />

            <button
                onClick={props.handleFormSubmit}
                type="submit"
                className="btn btn-success">
                Search
            </button>
        </div>
    </form>
)
export default SearchBox;