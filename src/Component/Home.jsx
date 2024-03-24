import React from 'react'
import Night3 from '../assets/night3.jpeg'
import Police3 from '../assets/police3.jpeg'
import Form from './Form'


function Home() {
    return (
        <>
            <div className='hero' >
                <div className='container text-light text-center pt-5'>
                    <h1 className='pt-5' style={{ marginTop: '8px' }}> SMART, RAPID AND EASY CRIME REPORT WEBSITE </h1>
                    <p style={{ fontsize: '24px' }}>Report any crime or security threat situation in your location</p>
                    <a href="/contact" className='btn btn-danger text-light'>Make Your Report</a>
                </div>
            </div>
            <div className="text-center mt-5 pb-5" data-aos="fade-up">
                <h2>Welcome to R-Crime Report Page</h2>
                <p className='pt-3'>Are you in distress? Do you have a security threat you wish to report? Are you so stuck in a threatening crime scene that making a call for help becomes very impossible, risky and may endanger your life?</p>
                <p>R-crime Report Website is here to enable you smartly send an easy and quick emergency alert message calling for security back up</p>
                <p>Simply tell us who you are and the nature of your situation, and your emergency alert message gets to the necessary destination</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Night3} alt="" />
                    </div>
                    <div className="col-md-6 ">
                        <img src={Police3} alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h2>WHY USE OUR WEBSITE</h2>
                        <h4>Avoid noise that may endanger your life</h4>
                        <p>R-crime Report Website enables you to silently make a report without blowing your cover</p>
                        <h4>Easy and Rapid Response</h4>
                        <p>It helps you to rapidly report a situation and hence, get immediate support</p>
                        <h4>Documentary Purposes</h4>
                        <p> Your enteries in this website serves as a record may be an evidence or help in investigation</p>
                    </div>
                    <div className="col-md-6  mt-5">
                        <h2> REPORT A SITUATION</h2>
                        <Form />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home