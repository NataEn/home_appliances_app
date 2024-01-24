import React, { FC } from "react";
import searches from "./mockPrevSearches.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const PreviousSearches: FC = (): JSX.Element => {
    return <section className="prev-searches">
        <h2>Previous Searches</h2>
        <div className="prev-searches-container">
            {
                searches.map((search,index) => {
                    return <div className="search-item" key ={index} style={{animationDelay: index*.1 +"s"}}>{search}</div>
                })
            }
        </div>
        <div className="search-box">
            <input type="text" placeholder="search..."/>
            <button type="submit" className="search-btn btn" name="search"><FontAwesomeIcon icon={faSearch}/></button>
        </div>
    </section>
}

export default PreviousSearches