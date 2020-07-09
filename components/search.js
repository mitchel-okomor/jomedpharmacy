import css from './search.module.scss';
import {useState} from 'react';

const Search = () =>{
    const [query, setQuery] = useState();
  
    const handleChange = (e) => {
        setQuery(e.target.value);
     console.log(query);
    };
    
    
    return(
        <div className={css.search}>
<form >
  <input type="search" id="search" name="search" value={query} placeholder="Search Products & Services" onChange={handleChange} />
  <button><i class="fa fa-search"></i></button>
</form>

</div>

    )
}

export default Search;