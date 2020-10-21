import React from 'react';

function ContactCard() {
    return(
        <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card" style={{maxWidth: '100%', backgroundColor: 'silver', marginTop: '10px'}}>
                  <div className="card-body">
                    <h1>Contact</h1>
                      <form>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                          <label for="clientName">Name</label>
                          <input type="name" className="form-control" id="clientName" />
                        </div>
                        <div className="form-group">
                          <label for="clientMessage">Message</label>
                          <input type="message" className="form-control" id="clientMessage" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default ContactCard;