import React from 'react';
import Navbar from '../components/navbar/nav';
import me from '../images/linkedin.jpg';

function Home() {
    return (
        <>
            <Navbar />
        <div className="container">
            <h1>Home</h1>
            <div className="row">
              <div className="col-12" style={{border: 'double 10px black', backgroundColor: 'silver'}}>
                <img className="float-left" src={me} alt="me" width="35%" height="auto" style={{margin: '20px', border: 'solid 2px black'}} />
                <div style={{marginTop: "20px"}}>
                <p>Miller Rich</p>
                <p>william.miller.rich@gmail.com</p>
                <p>615-123-4567</p>
                <p>https://github.com/millerrich</p>
                <p>resume</p>
                </div>
              </div>
            </div>
          </div>
          </>
    )
}

export default Home;