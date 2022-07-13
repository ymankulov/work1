import React from 'react';
import '../css/Header.css'
import '../App.css'
import {NavLink} from "react-router-dom";
import dev from '../img/brainy devs 1.svg'
import devs from '../img/Brainy Devs.svg'

const Header = () => {
    return (
        <div className='container'>

            <div style={{
                background:" #19558B",
                height: '120px'
            }}>
                <div className='header'>
                    <div className='logo'>
                        <img src={dev} alt=""/>
                        <img src={devs} alt=""/>
                    </div>


                    <NavLink to={'/about'}>
                        <h4 className='title1'>Home</h4>
                    </NavLink>
                        <NavLink to={'/about'}>
                            <h4 className='title1'>Services</h4>
                        </NavLink>
                        <NavLink to={'/skills'}>
                            <h4 className='title1'>Portfolio</h4>
                        </NavLink>
                        <NavLink to={'/services'}>
                            <h4 className='title1'>About Us</h4>
                        </NavLink>
                        <NavLink to={'/work'}>
                            <h4 className='title1'>Contact</h4>

                        </NavLink>
                        <NavLink to={'/contact'}>
                            <h4 className='title1'>0500 998 080</h4>

                        </NavLink>

                </div>
            </div>

        </div>
    );
};

export default Header;