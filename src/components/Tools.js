import React from 'react';
import figma from '../img/figma.svg'
import foto from '../img/foto.svg'
import fotoshop from '../img/photoshop.svg'
import react from '../img/react.svg'
import java from '../img/javascript.svg'
import ts from '../img/ts.svg'
import sass from '../img/sass.svg'
import redux from '../img/redux.svg'
import node from '../img/node.svg'

const Tools = () => {
    return (
        <div className='container'>
            <div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <h1 style={{
                        fontWeight:" 400",
                        fontSize: "48px",
                        lineHeight: "65px"
                    }}>Tools</h1>
                    <button style={{
                        border: 'none',
                        background: 'black',
                        width: '952px',
                        height: '0'
                    }}></button>
                </div>

            </div>
            <div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                    <img src={figma} alt=""/>
                    <img src={foto} alt=""/>
                    <img src={fotoshop} alt=""/>
                    <img src={react} alt=""/>
                    <img src={java} alt=""/>
                </div>
                <div style={{
                   marginTop:'90px',
                    display: 'flex',
                    justifyContent:'space-around'

                }}>
                    <img src={ts} alt=""/>
                    <img src={sass} alt=""/>
                    <img src={redux} alt=""/>
                    <img src={node} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Tools;