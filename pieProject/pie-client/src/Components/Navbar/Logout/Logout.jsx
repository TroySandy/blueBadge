import React from 'react';
import './Logout.css';
import powerButton from '../../../assets/images.gif'

const Logout = (props) =>  {



    return(
        <div>
            <img src={powerButton} alt="powerButton" id="logout" className="logout" />
        </div>
    )
}

export default Logout;