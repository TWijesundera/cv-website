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


class CV extends React.Component {
    render() {
        return(
            <div className="w3-row-padding">
                <LeftColumn />
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
                    <h2>Thisara Wijesundera</h2>
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
                </div>
            </div>
        );
    }
}




ReactDOM.render(<CV />, document.getElementById('root'));