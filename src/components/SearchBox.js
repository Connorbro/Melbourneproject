import React from 'react';


const SearchBox = ({searchfield, searchChange})=> {
  return (
    <div className= 'searchbox1'>
      <input className = 'searchbox2' 
        type = 'search' 
        placeholder = 'search character'
        onChange = {searchChange} 
        />
    </div>
  )
}

export default SearchBox;