import React from 'react';
import cottage from '../../images/cottage.jpg';
import comp from '../../images/comp.jpg';
import proj1 from '../../images/project-1-hyperlink.png';
import proj2 from '../../images/project-2-userpage.png';
import supernatural from '../../images/supernatural-.jpg';
import mush from '../../images/mush.jpg';

function PortDisplay() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5" style={{ border: 'double 8px black', padding: '1%', margin: '0.5%', backgroundColor: 'silver', textAlign: 'center' }}><img src={proj1} alt="cottage" width="100%;" className="img-responsive fit-image" />
                    <a className="btn btn-dark" style={{margin: '5px'}} href="https://cr31293.github.io/HyperLink/" rel="noopener noreferrer" target="_blank">Project 1: HyperLink</a>
                </div>
                <div className="col-5" style={{ border: 'double 8px black', padding: '1%', margin: '0.5%', backgroundColor: 'silver', textAlign: 'center' }}><img src={proj2} alt="computer" width="100%;" className="img-responsive fit-image" />
                    <a className="btn btn-dark" style={{margin: '5px'}} href="https://arcane-ravine-47168.herokuapp.com/" rel="noopener noreferrer" target="_blank">Project 2: Change For Good</a>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5" style={{ border: 'double 8px black', padding: '1%', margin: '0.5%', backgroundColor: 'silver', textAlign: 'center' }}><img src={cottage} alt="cottage" width="100%;" className="img-responsive fit-image" />
                    <a className="btn btn-dark" style={{margin: '5px'}} href="https://github.com/millerrich/employee-tracker" rel="noopener noreferrer" target="_blank">Employee Tracker CLI app</a>
                </div>
                <div className="col-5" style={{ border: 'double 8px black', padding: '1%', margin: '0.5%', backgroundColor: 'silver', textAlign: 'center' }}><img src={comp} alt="computer" width="100%;" className="img-responsive fit-image" />
                    <a className="btn btn-dark" style={{margin: '5px'}} href="https://millerrich.github.io/weather-dashboard/" rel="noopener noreferrer" target="_blank">Weather Dashboard</a>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5" style={{ border: 'double 8px black', padding: '1%', margin: '0.5%', backgroundColor: 'silver', textAlign: 'center' }}><img src={supernatural} alt="cottage" width="100%;" className="img-responsive fit-image" />
                    <a className="btn btn-dark" style={{margin: '5px'}} href="https://millerrich.github.io/password-generator/" rel="noopener noreferrer" target="_blank">Password Generator</a>
                </div>
                <div className="col-5" style={{ border: 'double 8px black', padding: '1%', margin: '0.5%', backgroundColor: 'silver', textAlign: 'center' }}><img src={mush} alt="computer" width="100%;" style={{position: 'relative'}} className="img-responsive fit-image" />
                    <a className="btn btn-dark" style={{margin: '5px'}} href="https://millerrich.github.io/work-day-scheduler/" rel="noopener noreferrer" target="_blank">Work Day Scheduler</a>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}



export default PortDisplay;