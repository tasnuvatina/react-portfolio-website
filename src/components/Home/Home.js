import React from 'react';
import './Home.css'
import resume from '../../Data/resume.pdf'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='component-main'>
            <div className='home-main'>
                    <div className='welcome'>
                            <h5 className="poppins-font">Hey there,</h5>
                            <h1 className="poppins-font">I'm Tasnuva,</h1>
                            <h2 className="work-sans-font">Web Developer & Programmer</h2>
                            <p className="work-sans-font all-p">A self-driven and passionate web developer with a passion for JavaScript.To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                            <div>
                                <a href={resume} download><button className="work-sans-font">Resume</button></a>
                                <Link to ='/contact'><button className="work-sans-font">Contact me</button></Link>
                            </div>
                    </div>
                    <div className='home-animation'></div>
            </div>
        </div>
    );
};

export default Home;