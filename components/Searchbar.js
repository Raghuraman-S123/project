import './Searchbar.css';

export default function Searchbar() {  
    return (
        <span id="searchbar">
            <form>
                <label htmlFor="design-search">Search Designs: </label>
                <input type="text" id="design-search" />
                <button type="submit">Search</button>
            </form>
        </span>
        
    )
}
