import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import img1 from '../../images/leaf.jpg'
import img2 from '../../images/mint.jpeg'
import './style.css'
import { Parallax } from 'react-parallax';


export default class aboutus extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="about_us_container">
                <Header pagename={'about'}/>
                <Parallax bgImage={img1} strength={500}>
                    <div className="parallax_container">
                        <div className="flex_center title_container">
                            <div className="page_title">
                                About us
                            </div>
                        </div>
                    </div>
                </Parallax>
                <div className="person_container">
                    <div className="about_us_img">
                        <img src={img1} alt="Otto" className="otto_pic" />
                    </div>
                    <div className="about_us_bio flex_center">
                        <div>
                            Otto is the project lead.
                        </div>
                    </div>
                </div>

                <Parallax bgImage={img2} strength={500}>
                    <div className="parallax_container"></div>
                </Parallax>
                <div className="person_container">
                    <div className="about_us_bio flex_center">
                        <div>
                            Megha is a grad student.
                        </div>
                    </div>
                    <div className="about_us_img">
                        <img src={img1} alt="Megha" className="megha_pic" />
                    </div>
                </div>

                <Parallax bgImage={img1} strength={500}>
                    <div className="parallax_container"></div>
                </Parallax>
                <div className="person_container">
                    <div className="about_us_img">
                        <img src={img1} alt="Danice" className="danice_pic" />
                    </div>
                    <div className="about_us_bio flex_center">
                        <div>
                            Danice works on the backend.
                        </div>
                    </div>
                </div>

                <Parallax bgImage={img2} strength={500}>
                    <div className="parallax_container"></div>
                </Parallax>
                <div className="person_container">
                    <div className="about_us_bio flex_center">
                        <div>
                            Tyler also works on the backend.
                        </div>
                    </div>
                    <div className="about_us_img">
                        <img src={img1} alt="Tyler" className="tyler_pic" />
                    </div>
                </div>

                <Parallax bgImage={img1} strength={500}>
                    <div className="parallax_container"></div>
                </Parallax>
                <div className="person_container">
                    <div className="about_us_img">
                        <img src={img1} alt="Nate" className="nate_pic" />
                    </div>
                    <div className="about_us_bio flex_center">
                        <div>
                            Nate works on the frontend.
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )

    }


}

// notes: make a footer, similarly to how she currently is implementing the header
// add header to each page 