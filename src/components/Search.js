import '../css/Search.css';
import React, {useRef,useEffect,useState} from 'react';

export default function Search (props) {

    let searchBar = useRef(null);

    useEffect(() => {
        searchBar.current.focus();
    })

    let tools = props.data;
    const[allData, setAllData] = useState(tools);

    const[filterValue, setFilterValue] = useState([])

    const [inputValue, setInputValue] = useState('');

    const SearchButton = (props) => {
        setFilterValue([]);
        const TitleName = allData.filter(element => element.Name.toLowerCase().search(inputValue.toLowerCase()) !== -1);
        filterValue.push(...TitleName);
        props.setData(filterValue);
        
    }   

    return (  
        <div>
            <label htmlFor="searchit" className="search-for-label">search for:</label>
                <div className="input-button-container">
                    <input 
                    placeholder='for example "hammer" '
                    className="search-input" 
                    id="searchit" 
                    name="searchit" 
                    ref={searchBar}
                    onChange={event => setInputValue(event.target.value)}
                    />
                    <button 
                    className="search-button"
                    type="button"
                    onClick={() => SearchButton(props)}
                    >Search
                    </button>
                </div>
        </div>
    )
}