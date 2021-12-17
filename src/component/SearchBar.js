import React from 'react'
import { useState } from 'react';

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const apiKey = 'a3ceaf43d1ab40489ba2b4e46358d16e';
    const url = 'https://api.spoonacular.com/food/products/search?query=' + 'Southern+' + search + '&apiKey=' + apiKey;

    return(
        <React.Fragment>
            <form>
                <label>
                    <input
                    placeholder="Search for a Southern Recipe..."
                    type="text" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </label>
            </form>
        </React.Fragment>
    )
    
}

export default SearchBar