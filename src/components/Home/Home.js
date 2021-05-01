import React from 'react';
import './Home.css'
import resume from '../../Data/resume.pdf'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='component-main'>
            <div className='home-main'>
                    <div className='welcome'>
                            <h5>Hey there,</h5>
                            <h1>I'm Tasnuva,</h1>
                            <h2>Web Developer & Programmer</h2>
                            <p>A self-driven and passionate web developer with a passion for JavaScript.To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                            <div>
                                <a href={resume} download><button>Resume</button></a>
                                <Link to ='/contact'><button>Contact me</button></Link>
                            </div>
                    </div>
                    <div className='home-animation'></div>
            </div>
        </div>
    );
};

export default Home;