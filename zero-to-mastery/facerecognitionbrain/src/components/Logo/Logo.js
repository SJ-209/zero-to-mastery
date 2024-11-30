import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="br2 shadow-2"  options= {{ max : 25 }} style={{ height: '150px',width: '150px' }} glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="5px">
                <div >
                    <div className="Tilt-inner pa1">
                        <img style={{padding: '5px', scale: '0.8'}} alt='logo' src={brain}></img>
                    </div> 
                </div>
            </Tilt>
        </div> 
    );
}

export default Logo;