import React from 'react';
import tel from '../img/tel.svg'
import nov from '../img/nov.svg'
import msg from '../img/msg.svg'

const Footer = () => {
    return (
        <div className='container'>
          <div style={{
              background:'#19558B',
              display:'flex',
              alignItems:'center',
              justifyContent:'space-around'
          }}>
              <div>
                  <div style={{
                      color:'white',
                      display:'flex',
                      alignItems: 'center',
                      justifyContent:'space-between'
                  }}>
                      <h1 style={{
                          fontWeight: "500",
                          fontSize: "25px",
                          lineHeight: "30px",
                      }}>Brainy Devs</h1>
                      <h1 style={{
                          marginLeft:'320px'
                      }}>0500 998 080</h1>
                      <div style={{
                          marginLeft:'20px',
                          fontWeight: "500",
                          fontSize: "25px",
                          lineHeight: "30px",
                      }}>
                          <img src={tel} alt=""/>
                          <img src={nov} alt=""/>
                          <img src={msg} alt=""/>
                      </div>

                  </div>
                  <div style={{
                      color:'white',
                      fontWeight: "500",
                      fontSize: "25px",
                      lineHeight: "30px",
                      display:'flex',
                      justifyContent:'space-around'
                  }}>
                      <h3>Services</h3>
                      <h3>Portfolio</h3>
                      <h3>Staff</h3>
                      <h3>About Us</h3>
                      <h3>Contact</h3>
                  </div>
              </div>

              <div>
<h1 style={{
    color: 'white',
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "29px",
}}>© Copyright ООО " Brainy Devs " 2022</h1>
              </div>
          </div>
        </div>
    );
};

export default Footer;