import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import img1 from '../../images/leaf.jpg'
import img2 from '../../images/mint.jpeg'
import otto_pic from '../../images/otto.png'
import danice_pic from '../../images/danice.jpg'
import tyler_pic from '../../images/tyler.png'
import nate_pic from '../../images/nate.png'
import megha_pic from '../../images/megha.jpg'
import './style.css'
import { Parallax } from 'react-parallax';


export default class aboutus extends Component {

    // this class is particularly simple, it only displays frontend components and has no functionality
    // any element of functionality such as the header and footer are dealt with separately
    render() {
        return (
            <div className="about_us_container">
                <Header pagename={'about'}/>
                <Parallax bgImage={img1} strength={500}>
                    <div className="first_parallax_container">
                        <div className="flex_center title_container">
                            <div className="page_title">
                                About us
                            </div>
                            {/*<div className="page_title_body">
                                I came up with the concept of Garden Shepherd because I wanted to learn how to garden myself to increase resilience to future resource shortages that could potentially be brought about by climate change.
                                I found planning a garden to be difficult and wanted to create a tool to help myself and others.
                                By releasing Garden Shepherd as a web app, I hope to help more people start growing some of their own food.
                            </div>*/}
                        </div>
                    </div>
                </Parallax>
                <div className="person_container">
                    <div className="about_us_img">
                        <img src={otto_pic} alt="Otto" className="otto_pic" />
                    </div>
                    <div className="about_us_bio flex_center">
                        <div>
                            I am a Computer Science undergrad working as a back-end developer and product owner for Garden Shepherd.
                            I came up with the concept of Garden Shepherd because I wanted to learn how to garden myself to increase resilience to future resource shortages that could potentially be brought about by climate change.
                            I found planning a garden to be difficult and wanted to create a tool to help myself and others.
                            By releasing Garden Shepherd as a web app, I hope to help more people start growing some of their own food.
                            In my free time, I like to play video games, doodle, and anxiously pace in circles.
                            <p className="person_name">- Otto Daniels</p>
                        </div>
                    </div>
                </div>

                <Parallax bgImage={img2} strength={500}>
                    <div className="parallax_container"></div>
                </Parallax>
                <div className="person_container">
                    <div className="about_us_bio flex_center">
                        <div>
                            I am an ITWS grad student working as a front-end developer and project manager for Garden Shepherd.
                            The reason why I choose to be part of this team is that I love plants and nature.
                            I have my kitchen garden and like to spend time growing new plants.
                            Apart from gardening, I also love to do yoga and painting, and sketching.
                            This application will be a game-changer for all plant lovers who have busy schedules but love to do gardening as their hobby.
                            <p className="person_name">- Megha Rajpoot</p>
                        </div>
                    </div>
                    <div className="about_us_img">
                        <img src={megha_pic} alt="Megha" className="megha_pic" />
                    </div>
                </div>

                <Parallax bgImage={img1} strength={500}>
                    <div className="parallax_container"></div>
                </Parallax>
                <div className="person_container">
                    <div className="about_us_img">
                        <img src={danice_pic} alt="Danice" className="danice_pic" />
                    </div>
                    <div className="about_us_bio flex_center">
                        <div>
                            Hi, I’m a Computer Science undergraduate working as a back-end developer for Garden Shepherd.
                            I am a plant owner myself but have been primarily focused on indoor plants such as succulents and cacti.
                            In my free time, I have hobbies such as art, video/tabletop games and reading.
                            <p className="person_name">- Danice Pe Benito</p>
                        </div>
                    </div>
                </div>

                <Parallax bgImage={img2} strength={500}>
                    <div className="parallax_container"></div>
                </Parallax>
                <div className="person_container">
                    <div className="about_us_bio flex_center">
                        <div>
                            I am a CS undergraduate senior working as a back-end developer for Garden Shepherd.
                            I currently don’t have any plants but I’d like some in the future so working on a project related to them is nice.
                            In my free time I like to play video games, read books and watch anime.
                            <p className="person_name">- Tyler Bejel</p>
                        </div>
                    </div>
                    <div className="about_us_img">
                        <img src={tyler_pic} alt="Tyler" className="tyler_pic" />
                    </div>
                </div>

                <Parallax bgImage={img1} strength={500}>
                    <div className="parallax_container"></div>
                </Parallax>
                <div className="person_container">
                    <div className="about_us_img">
                        <img src={nate_pic} alt="Nate" className="nate_pic" />
                    </div>
                    <div className="about_us_bio flex_center">
                        <div>
                            Hello everyone! A little bit about myself, I am a graduating CS student currently working as a frontend developer for Garden Shepherd.
                            I knew I wanted to work on this project as soon as I heard about it, as I grew up in a household full of plants, and would love to see an app that helps people get into gardening.
                            My hobbies include archery, doodling, and playing video games.
                            <p className="person_name">- Nate Zink</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )

    }


}