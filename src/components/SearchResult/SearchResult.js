import React from "react";
import "./SearchResult.css"

const SearchResult = props => (
    <ul className="list-group search-result">
        {props.results.map(result => (
            <li className="list-group-item" key={result}>
                <img className="img-fluid" alt="dog" src={result} />
            </li>
        ))}
    </ul>
)
export default SearchResult;