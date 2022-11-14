import React, { Component, useState } from 'react'
import homestyle from './Homestyle.module.css'
// import arrow from '../image/arrow.png'
import python from '../images/Login_form.jpg';
import learn from '../images/learning.jpg';

import { FaBars, FaSearch, FaStar, FaStarHalfAlt, FaPython } from 'react-icons/fa';
import { Link } from 'react-router-dom';


// ***** Importing Header and Footer ******
import Header from './Header'
import Footer from './Footer';
import CardDetails from './CardDetails';

// ***** Importin pages end Here *********







function Homepage() {

    const [icons, setIcons] = useState(CardDetails)


    return (

        <React.Fragment>
            {/*****weekdays in excel* Header *******/}
            <Header />
            {/****** Header End Here ******/}

            {/*******  Main page img *********/}
            <div className={homestyle.bodyImg}>
                <div className={homestyle.imgContent}>
                    <h1>
                        <p>This is Training Website, We providing the
                            Job.
                        </p>

                        weekdays in excel          </h1>
                    <br></br>
                    <br></br>
                    <Link to='signup'>Register Now</Link>

                </div>
            </div>

            {/******** Card starts here *******/}

            <div className={homestyle.outerBody}>
                <div className={homestyle.cardBody}>
                    {
                        icons.map((icon, index) => {
                            return (

                                <div className={homestyle.container} key={index}>
                                        <div className={homestyle.card}>
                                            <div className={`${homestyle.face} ${homestyle.face1}`}>
                                                <div className={homestyle.content}>
                                                    <i className={homestyle.Ficons}>{icon.Icons}</i>
                                                    <h3 style={{ "font-size": "20px" }}>{icon.Name}</h3>
                                                </div>
                                            </div>
                                            <div className={`${homestyle.face} ${homestyle.face2}`}>
                                                <div className={homestyle.content}>
                                                    <p>{icon.Description}</p>
                                                    <Link to='syllabus'>View</Link>
                                                </div>

                                            </div>
                                        </div>
                                    



                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* <div className={homestyle.outerBody}>
                <div className={homestyle.cardBody}>
                    {
                        icons.map((icon, index) => {
                            return (
                                <div className={homestyle.container} key={index}>

                                    <div className={homestyle.card}>
                                        <div className={`${homestyle.face} ${homestyle.face1}`}>
                                            <div className={homestyle.content}>
                                                <i className={homestyle.Ficons}>{icon.Icons}</i>
                                                <h3 style={{ "font-size": "20px" }}>{icon.Name}</h3>
                                            </div>
                                        </div>
                                        <div className={`${homestyle.face} ${homestyle.face2}`}>
                                            <div className={homestyle.content}>
                                                <p>{icon.Description}</p>
                                                <a href="#" type="button">Vicontainerew</a>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div> */}


            {/******* Card Ends here *********/}


            {/******** Footer ********/}
            <Footer />
            {/********* Footer end Here *******/}


        </React.Fragment >

    )
}


export default Homepage
