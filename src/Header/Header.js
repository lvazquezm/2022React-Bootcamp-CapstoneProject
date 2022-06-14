import React,{useState} from 'react';
import logoImage from '../Images/Header/furnitures.png'
import './Header.css'

export default function Header() {

    const [searchItem, setSearchItem] = useState("");

    const handleOnChange = (e) =>{
        setSearchItem(e.target.value);
    }

    function Logo(){
        return(
            <img
                data-testid='imageLogo'
                src={logoImage}
                alt="Logo"
                onClick={handleLogoOnClick}
            />
        )
    }

    const handleLogoOnClick = (e) =>{
        e.preventDefault();
    }

    return(
        <div className='header-container'>
            <div className='header'>
                <Logo/>
                <h1>Rusty Furniture</h1>
                <input 
                    type="text" 
                    placeholder="Search here" 
                    onChange={handleOnChange}
                    value={searchItem} 
                />
                <img
                    src={require('../Images/Header/shopping-cart.png').default}
                    alt="Shopping cart"
                />
            </div>
        </div>
    )
}