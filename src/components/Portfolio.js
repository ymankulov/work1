import React from 'react';
import '../App.css'
import rec1 from '../img/Rectangle1.png'
import rec2 from '../img/2.png'
import rec3 from '../img/Rectangle3.png'
import icon from '../img/Combined-Shape.svg'
import '../css/Portfolio.css'
import lline from '../img/lline.png'
import line1 from "../img/line1.svg";
import line2 from "../img/line2.svg";


const Portfolio = () => {
    return (
        <div className='container'>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    // justifyContent: 'center'
                }}>
                    <h1 style={{
                        fontWeight:" 400",
                        fontSize: "48px",
                        lineHeight: "65px"
                    }}>Portfolio</h1>
                    <button style={{
                        border: 'none',
                        background: 'black',
                        width: '952px',
                        height: '0'
                    }}></button>
                </div>
                {/*<div className='work'>*/}
                {/*    <div  style={{*/}
                {/*        width: '200px',*/}
                {/*        height: '150px',*/}
                {/*        marginBottom: '20p'*/}

                {/*    }}>*/}
                {/*        <img style={{*/}
                {/*            marginBottom: '-654px'*/}
                {/*        }} src={lline} alt=""/>*/}
                {/*        <div style={{*/}
                {/*            position: 'absolute'*/}
                {/*        }}>*/}
                {/*            <img style={{*/}
                {/*                marginTop: '200px'*/}
                {/*            }} src={rec1} alt=""/>*/}
                {/*            <h1 className='title__por'>Mining orypto made <br/> accessible to everyone</h1>*/}
                {/*            <div style={{*/}
                {/*                display: 'flex',*/}
                {/*                justifyContent: 'center',*/}
                {/*                alignItems: 'center'*/}
                {/*            }}>*/}
                {/*                <h4>View</h4>*/}
                {/*                <img src={icon} alt=""/>*/}
                {/*        </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginLeft: "-74px"
            }}>
                <div style={{
                    display: 'flex',


                }}>
                    <div>
                        <h1 style={{
                            position: 'absolute',
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "29px",
                            marginTop: '310px',
                            marginLeft: '44px'


                        }}>Mining orypto made <br/> accessible to everyone</h1>
                        <img style={{
                            position: 'absolute'
                        }} src={rec1} alt=""/>
                        <div style={{
                            position: 'absolute',
                            display: 'flex',
                            marginTop: '367px' ,
                            marginLeft:' 130px'

                        }}>
                            <h4 className='view'>View</h4>
                            <img src={icon} alt=""/>
                        </div>

                        <img style={{
                            marginBottom: '38px'
                        }} src={lline} alt=""/>
                    </div>
                    <div style={{
                        position: 'absolute',
                        marginLeft: '371px'
                    }}>
                        <h1 style={{
                            position: 'absolute',
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "29px",
                            marginTop: '310px',
                            marginLeft: '44px'


                        }}>Mining orypto made <br/> accessible to everyone</h1>
                        <img style={{
                            position: 'absolute'
                        }} src={rec1} alt=""/>
                        <div style={{
                            position: 'absolute',
                            display: 'flex',
                            marginTop: '367px' ,
                            marginLeft:' 20px'

                        }}>
                            <h4 className='view'>View</h4>
                            <img src={icon} alt=""/>
                        </div>

                        <img style={{
                            marginBottom: '38px'
                        }} src={lline} alt=""/>
                    </div>
                    <div style={{
                        position: 'absolute',
                        marginLeft: '-371px'
                    }}>
                        <h1 style={{
                            position: 'absolute',
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "29px",
                            marginTop: '310px',
                            marginLeft: '44px'


                        }}>Mining orypto made <br/> accessible to everyone</h1>
                        <img style={{
                            position: 'absolute'
                        }} src={rec1} alt=""/>
                        <div style={{
                            position: 'absolute',
                            display: 'flex',
                            marginTop: '367px' ,
                            marginLeft:' 130px'

                        }}>
                            <h4 className='view'>View</h4>
                            <img src={icon} alt=""/>
                        </div>

                        <img style={{
                            marginBottom: '38px'
                        }} src={lline} alt=""/>
                    </div>
                    <div style={{
                        marginTop: '480px',
                        marginLeft:'-241px'

                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                            <h1 style={{
                                fontWeight: "500",
                                fontSize: "25px",
                                lineHeight: "30px"
                            }}>All projects</h1>
                            <img src={icon} alt=""/>
                        </div>
                        <button style={{
                            border: 'none',
                            borderRadius: '20px',
                            background: 'black',
                            width: '182px',
                            height: '0',
                        }}></button>
                    </div>
            </div>





            </div>
        </div>
    );
};

export default Portfolio;