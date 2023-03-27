import SearchContext from "./searchContext";
import { useState } from "react";


const SearchState=(props)=>{
    const searchkeyword={
        'searchField' : '',
    }
    const [searchkey, setsearchkey] = useState(searchkeyword);
const search=(keyword)=>{
    setsearchkey({'searchField':keyword});
}
// console.log(state.searchField);
    return (
    <SearchContext.Provider value={{searchkey, search}}>
    {props.children}
    </SearchContext.Provider>
      )
}
export default SearchState;