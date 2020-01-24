import React from 'react';
import ReactDOM from 'react-dom';
import './w3.css';
import photo from './Dependencies/stock_photo.jpg';
import { Icon, InlineIcon } from '@iconify/react';
import bxHomeAlt from '@iconify/icons-bx/bx-home-alt';
import bxBriefcaseAlt from '@iconify/icons-bx/bx-briefcase-alt';
import bxPhone from '@iconify/icons-bx/bx-phone';
import bxEnvelope from '@iconify/icons-bx/bx-envelope';
import bxShow from '@iconify/icons-bx/bx-show';
import bxBriefcase from '@iconify/icons-bx/bx-briefcase';
import bxBoltCircle from '@iconify/icons-bx/bx-bolt-circle';
import bxCalendar from '@iconify/icons-bx/bx-calendar';
import bxsCertification from '@iconify/icons-bx/bxs-certification';
import bxlGithub from '@iconify/icons-bx/bxl-github';
import bxlLinkedinSquare from '@iconify/icons-bx/bxl-linkedin-square';




class CV extends React.Component {
    render() {
        return(
            <div className="w3-row-padding">
                <LeftColumn />
                <RightColumn />
            </div>
        );
    }
}


class LeftColumn extends React.Component {
    render() {
        return (
            <div className="w3-third">
                <div className="w3-white w3-text-grey w3-card-4">
                    <LeftColPhoto />
                    <LeftColContent/>
                </div>
            </div>
        );
    }
}

class LeftColPhoto extends React.Component {
    render() {
        return (
            <div className="w3-display-container">
                <img src={photo} alt="Avatar" style={{width: "100%"}}/>
                <div className="w3-display-bottomleft w3-container w3-text-black">
                    <h2 className="w3-text-white">Thisara Wijesundera</h2>
                </div>
            </div>
        );
    }
}

class LeftColContent extends React.Component {
    render() {
        return (
            <div className="w3-container">
                <p>
                    <InlineIcon icon={bxBriefcaseAlt} className="w3-margin-right w3-large w3-text-purple" />
                    Jr Fullstack Developer
                </p>

                <p>
                    <InlineIcon icon={bxHomeAlt} className="w3-margin-right w3-large w3-text-purple" />
                    Ann Arbor, Michigan
                </p>

                <p>
                    <InlineIcon icon={bxEnvelope} className="w3-margin-right w3-large w3-text-purple" />
                    thisarawijesundera@gmail.com
                </p>

                <p>
                    <InlineIcon icon={bxPhone} className="w3-margin-right w3-large w3-text-purple" />
                    +1 734-709-2027
                </p>
                <hr></hr>
                <LeftColSkills />
            </div>
        );
    }
}

class LeftColSkills extends React.Component {
    render() {
        return (
            <div>
                <p className="w3-large">
                    <Icon icon={bxShow} className="w3-margin-right w3-text-purple w3-large"/>
                    Skills
                </p>

                <p>Python</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div 
                        className="w3-container w3-center w3-round-xlarge w3-purple"
                        style={{width: "80%"}}
                    >
                    80%
                    </div>
                </div>

                <p>Java</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                        className="w3-container w3-center w3-round-xlarge w3-purple"
                        style={{width: "70%"}}
                    >
                    70%
                    </div>
                </div>

                <p>MySQL</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                        className="w3-container w3-center w3-round-xlarge w3-purple"
                        style={{width: "50%"}}
                    >
                    50%
                    </div>
                </div>

                <p>React</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                        className="w3-container w3-center w3-round-xlarge w3-purple"
                        style={{width: "33%"}}
                    >
                    33%
                    </div>
                </div>

                <p>Elm</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div
                        className="w3-container w3-center w3-round-xlarge w3-purple"
                        style={{width: "25%"}}
                    >
                    25%
                    </div>
                </div><br />
            </div>
        );
    }
}

class RightColumn extends React.Component {
    render() {
        return (
            <div className="w3-twothird">
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <h2
                        className="w3-text-grey w3-padding-16"
                    >
                        <InlineIcon icon={bxBriefcase} 
                        className="w3-xxlarge w3-text-purple w3-margin-right" />
                        Work Experience
                    </h2>
                    <WorkContent />
                </div>
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <h2
                        className="w3-text-grey w3-padding-16"
                    >
                        <InlineIcon icon={bxsCertification}
                        className="w3-xxlarge w3-text-purple w3-margin-right" />
                        Education
                    </h2>
                    <EducationContent />
                </div>
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <h2
                        className="w3-text-grey w3-padding-16"
                    >
                        <InlineIcon icon={bxBoltCircle}
                        className="w3-xxlarge w3-text-purple w3-margin-right" />
                        Side Projects
                    </h2>
                </div>
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <h2
                        className="w3-text-grey w3-padding-16"
                    >
                        <InlineIcon icon={bxBoltCircle}
                        className="w3-xxlarge w3-text-purple w3-margin-right" />
                        Volunteering
                    </h2>
                </div>
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <h2
                        className="w3-text-grey w3-padding-16"
                    >
                        <InlineIcon icon={bxBoltCircle}
                        className="w3-xxlarge w3-text-purple w3-margin-right" />
                        Freetime
                    </h2>
                </div>
            </div>
        );
    }
}


class WorkContent extends React.Component {
    render() {
        return (
            <div>
                <div className="w3-container">
                    <h5 className="w3-opacity"><b>Software Test Engineer Co-Op / Harman International</b></h5>
                    <h6
                        className="w3-text-purple"
                    >
                        <InlineIcon icon={bxCalendar} 
                        className="w3-text-purple w3-large w3-margin-right" />
                        2016 - 2019
                    </h6>
                    <p>Fill in work Experience here</p>
                    <hr></hr>
                </div>
                <div className="w3-container">
                    <h5 className="w3-opacity"><b>Software/Harware Technician Apprentice / Filestable</b></h5>
                        <h6
                            className="w3-text-purple"
                        >
                            <InlineIcon icon={bxCalendar} 
                            className="w3-text-purple w3-large w3-margin-right" />
                            2013 - 2015
                        </h6>
                        <p>Fill in work Experience here</p>
                </div>
            </div>
        );
    }
}

class EducationContent extends React.Component {
    render() {
        return (
            <div className="w3-container">
                <h5 className="w3-opacity"><b>Kettering University</b></h5>
                <h6
                    className="w3-text-purple"
                >
                    <InlineIcon icon={bxCalendar} 
                    className="w3-text-purple w3-large w3-margin-right" />
                    2015 - 2020
                </h6>
                <p>Bachelor's in Computer Science</p>
            </div>
        );
    }
}

class FooterContent extends React.Component {
    render() {
        return (
            <footer className="w3-container w3-purple w3-center w3-margin-top">
                <p>Find me on social media</p>
                <InlineIcon icon={bxlGithub} className="w3-hover-opacity w3-txt-white w3-xlarge" />
                <a href="https://www.google.com"><InlineIcon icon={bxlLinkedinSquare} className="w3-hover-opacity w3-txt-white w3-xlarge"/></a>
            </footer>
        );
    }
}

ReactDOM.render(<CV />, document.getElementById('root'));
ReactDOM.render(<FooterContent />, document.getElementById("foot"))