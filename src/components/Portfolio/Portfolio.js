import React from 'react';
import './Portfolio.css'
import SingleProjectCard from './SingleProjectCard';
import styledora from "../../images/styledora.png";
import soulnest from '../../images/soulnest.png';
import destinigo from '../../images/destinigo.png';
import sanantonio from '../../images/sanantonio.png';
import grandleagues from '../../images/grandleague.png'

let projects=[
    {
        pic: styledora,
        name:"StyleDora E-commerce",
        description:"A full stack ecommerce website with custom API,built with Reactjs, React Router,Firebase,Nodejs,MongoDB.",
        clientGithubLink:"https://github.com/tasnuvatina/styleDora-ecommerce-website-client",
        liveLInk:"https://full-stack-client.web.app/",
        serverGithubLink:"https://github.com/tasnuvatina/styleDora-ecommerce-website-server"
    },{
        pic: soulnest,
        name:"Soulnest Photography",
        description:"Complete(MERN) photography company website ecommerce website with custom API,built with Reactjs,Stripejs, React Router,Firebase,Nodejs,MongoDB.",
        clientGithubLink:"https://github.com/tasnuvatina/soulNest-photography-website-client",
        liveLInk:"https://soulnest-wedding-photography.web.app/",
        serverGithubLink:"https://github.com/tasnuvatina/soulNest-photography-website-server"
    },
    {
        pic: destinigo,
        name:"DestiniGo Transportation",
        description:"A full stack ecommerce website with custom API,built with Reactjs, React Router,Firebase,Nodejs,MongoDB. ",
        clientGithubLink:"https://github.com/tasnuvatina/destiniGo-tranportation-website",
        liveLInk:"https://react-auth-6f7ad.web.app/"
    },
    {
        pic: grandleagues,
        name:"Grand Leagues",
        description:"A full stack ecommerce website with custom API,built with Reactjs, React Router,Firebase,Nodejs,MongoDB.",
        clientGithubLink:"https://github.com/tasnuvatina/grand-leagues-website-react",
        liveLInk:"https://react-router-tasnuvatina.netlify.app/"
    },
    {
        pic: sanantonio,
        name:"San Antonio F.C.",
        description:"A full stack ecommerce website with custom API,built with Reactjs, React Router,Firebase,Nodejs,MongoDB.",
        clientGithubLink:"https://github.com/tasnuvatina/san-antonio-football-club",
        liveLInk:"https://simple-react-tasnuvatina.netlify.app/"
    }
]

const Portfolio = () => {
    return (

        <div className='component-main'>
            <div className='portfolio-main'>
                <div>
                <div className='portfolio-header'>
                    <div className='container'>
                    <h2>Web Developer Portfolio</h2>
                        <p>Just some of the projects I worked on.</p>
                    </div>
                    </div>
                        <div className='portfolio-all container'>
                            {
                                projects.map(project=><SingleProjectCard project={project}></SingleProjectCard>)
                            }
                        </div>
                </div>
            </div>
        </div>
        
    );
};

export default Portfolio;