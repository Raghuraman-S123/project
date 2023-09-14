//import UserDetails from "./UserDetails";

import Searchbar from "./Searchbar";

import './Header.css';
import logo from '../img/logo.png'

function Header() {
    return (
        // <header className="header-component">
        //     <h1>Foo Header</h1>
        // </header>

        <div className="header">
            <div className="topnav">
                <img src={ logo } alt="logo" id="logo" />
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#" id="cart">Cart</a>
            </div>
            <div className="topnav">
                <Searchbar />
            </div>
        </div>
    )
}

export default Header;