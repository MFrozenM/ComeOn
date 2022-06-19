import React, {useEffect, useRef} from 'react';
import classes from './search.module.css'
import {useCachedData} from "../../stores/fetchedDataCache";
import {ReactComponent as SearchIcon} from "../../../../assets/icons/search.svg";

const Search = () => {
    const inputRef = useRef(null);

    const setSearchedName = useCachedData(state => state.setSearchedName);
    const searchedName = useCachedData(state => state.searchedName);
    const filterGamesByName = useCachedData((state) => state.filterGamesByName)

    useEffect(() => {
        filterGamesByName(searchedName)
    }, [searchedName])

    const onSearchInputChange = (e) => {
        setSearchedName(e.target.value)
    };

    return (
        <div className={classes.container}>
            <input data-testid="search-input" ref={inputRef} onChange={onSearchInputChange} value={searchedName}
                   placeholder="Search Game"
                   className={classes.search_input}/>

                   <SearchIcon className={classes.search_icon}/>
        </div>
    );
};

export default Search;
