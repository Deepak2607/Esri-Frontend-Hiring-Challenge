import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar1 extends Component {
    
    render () {
        
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>All Transactions</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/totals" exact>Total Transactions & Amount (for each Date)</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/charts" exact>Charts</NavLink>
                  </li>
                </ul>
                <form style={{marginLeft:'300px', width:'400px'}} >
                  <input className="form-control mr-sm-2" type="search" placeholder="Search for Transaction Details" aria-label="Search" value={this.props.query}
                   onChange={this.props.handleInputChange} />
                </form>
              </div>
            </nav>
            </div>
    );
  }  
}

export default Navbar1;