import React from 'react';
import './Portfolio.css'
import SingleProjectCard from './SingleProjectCard';
import styledora from "../../images/styledora.png";
import soulnest from '../../images/soulnest.png';
import destinigo from '../../images/destinigo.png';
import sanantonio from '../../images/sanantonio.png';
import grandleagues from '../../images/grandleague.png'
import { motion } from "framer-motion"

let projects=[
    {
        pic: styledora,
        name:"StyleDora E-commerce",
        description:"A full stack ecommerce website with custom API,built with Reactjs, React Router,Firebase,Nodejs,MongoDB,here customers can order see various products.if he is logged in he can order t-shirts,review those orders ,delete any order and see new deals.Admins can add new products and manage then.",
        clientGithubLink:"https://github.com/tasnuvatina/styleDora-ecommerce-website-client",
        liveLInk:"https://full-stack-client.web.app/",
        serverGithubLink:"https://github.com/tasnuvatina/styleDora-ecommerce-website-server"
    },{
        pic: soulnest,
        name:"Soulnest Photography",
        description:"Complete(MERN) photography company website ecommerce website with custom API,built with Reactjs,Stripejs,React Router,Firebase,Nodejs,MongoDB.Here customers can book his events with credit card payment,can see his bookings and give reviews.Admin has restricted access,he can add and manage services,change customer booking status and make new admin",
        clientGithubLink:"https://github.com/tasnuvatina/soulNest-photography-website-client",
        liveLInk:"https://soulnest-wedding-photography.web.app/",
        serverGithubLink:"https://github.com/tasnuvatina/soulNest-photography-website-server"
    },
    {
        pic: destinigo,
        name:"DestiniGo Transportation",
        description:"A react transportation website,built with Reactjs, React Router,Firebase authentication system.Here,user can choose from various vehicles,if he is logged in he will be directed to destination page where he can book his tranport and compare prices.He can also see his path on google map. ",
        clientGithubLink:"https://github.com/tasnuvatina/destiniGo-tranportation-website",
        liveLInk:"https://react-auth-6f7ad.web.app/"
    },
    {
        pic: grandleagues,
        name:"Grand Leagues",
        description:"A react website where user can see all the famous leagues and explore detail information about them.He can also see the latest league events and picture gallary.",
        clientGithubLink:"https://github.com/tasnuvatina/grand-leagues-website-react",
        liveLInk:"https://react-router-tasnuvatina.netlify.app/"
    },
    {
        pic: sanantonio,
        name:"San Antonio F.C.",
        description:"This is a Football club page which is made with react.Specific number of players profiles are on that page from where user can choose players to form a team.And also can see his selected team members and required budget to hire them.This page is fully responsive.",
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
                    <motion.h2 className='h2-headers poppins-font'
                    initial={{y:-200}}
                    animate={{y:0}}
                    transition={{type:'spring',damping:30,stiffness:120,delay:.5}}
                    >
                    Web Developer Portfolio</motion.h2>
                        <motion.h5 className="poppins-font"
                        initial={{y:-200}}
                        animate={{y:0}}
                        transition={{type:'spring',damping:30,stiffness:120,delay:.9}}
                        >
                        Just some of the projects I worked on.</motion.h5>
                    </div>
                    </div>
                        <div className='portfolio-all container '>
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