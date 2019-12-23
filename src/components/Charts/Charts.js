import React, { Component } from 'react';
import Navbar2 from "../Navbar/Navbar2";

class Charts extends Component{
    
       constructor(){
        super();
        
        this.redirect1=()=> {
            this.props.history.push('/charts/pie1');
        }
        this.redirect2=()=> {
            this.props.history.push('/charts/pie2');
        }
        this.redirect3=()=> {
            this.props.history.push('/charts/column1');
        }
        this.redirect4=()=> {
            this.props.history.push('/charts/column2');
        }
         
    }
     
    render(){ 
            return(  
                <div className="container-fluid">
                
                <div>
                <Navbar2 />
                </div>
                
                <center>
                <br/>
                <div>
                <button type="button" onClick={this.redirect3} className="btn btn-success">Total No. of Transactions (for each Date) - Column Chart</button>
                </div><br/>
                <div>
                <button type="button" onClick={this.redirect4} className="btn btn-secondary">Total Amount Transferred (for each Date) - Column Chart</button>
                </div><br/>
                <div>
                <button type="button" onClick={this.redirect1} className="btn btn-info">Total No. of Transactions (for each Date) - Pie Chart</button>
                </div><br/>
                <div>
                <button type="button" onClick={this.redirect2} className="btn btn-danger">Total Amount Transferred (for each Date) - Pie Chart</button>
                </div>
                </center>
                </div>
            );
     }     
}

export default Charts;