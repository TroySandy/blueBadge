import React from 'react';
import './Navbar.css';
import pumpPie from '../../assets/Pumpkin-Pie_2.jpeg';
import Logout from './Logout/Logout'

const Navbar = (props) => {
console.log(props);




    return(
        <div>
            <nav>
                <img src={ pumpPie } alt="pie" id="piePic"/>
                <Logout />
            </nav>
        </div>
    )
}

export default Navbar;