import css from './search.module.scss';
import {useState} from 'react';
import axios from 'axios';

const Search = () =>{
    const [query, setQuery] = useState();
    const [searchResult, setSearchResult] = useState('');
  
    const handleChange = (e) => {
        setQuery(e.target.value);
     console.log(query);
    };
    

     //submit form data to backend server
  const handleSubmit =async (e) => {
    e.preventDefault();
    //dispatch({field:"loading", value:true});
const url = 'http://localhost:4000/search?value='+query;
console.log(query);
try{
const response = await axios.get(url, {
timeout: 30000
});
if(response.status==200){
setSearchResult(response.data.data);

console.log(searchResult);
}
}
catch(error){
console.log(error);

}

};
    
    return(
        <div className={css.search}>
<form >
  <input type="text" id="search" name="search" value={query} placeholder="Search Products & Services" onChange={handleChange} />
  <button onClick={handleSubmit}><i className="fa fa-search"></i></button>
</form>

</div>

    )
}

export default Search;