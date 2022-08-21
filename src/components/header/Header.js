import React,{useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {

    const [menuState,setMenuState]=useState(false);

    return (
        <div className='header'>
            <div className='container'>
                <div className='header-content'>
                    <div className='logo'>
                        <h1>DINO<span>'S</span> HUB</h1>
                    </div>
                    <div className={menuState ? 'navigation open' : 'navigation close'}>
                        <nav>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/menu'>Menu</Link></li>
                            </ul>
                        </nav>
                        <div className='call-us'>
                            CALL US ON: <span>+961 71524020</span>
                        </div>
                    </div>
                    <button className={menuState ? 'burger-menu open' : 'burger-menu closed'} onClick={() => setMenuState(!menuState)}>
                        <div className='top'></div>
                        <div className='middle'></div>
                        <div className='bottom'></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header