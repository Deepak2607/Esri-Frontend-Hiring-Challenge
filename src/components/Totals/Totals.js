import React, { Component } from 'react';
import axios from 'axios';
import Total from "./Total";
import Navbar2 from "../Navbar/Navbar2";

class Totals extends Component{
    
       constructor(){
        super();
        
        this.state={
            totals:[],
            currentPage:0,
            disable1:true,
            disable2:false
        }
        
        this.componentDidMount=()=> {
            
            //fetching data
            axios.get("https://deepak2607.github.io/Esri_jsondata.json").then( response=>{
                const t_data= response.data; 
                let arr=[],id=1;
                
                for(let i=0;i<t_data.length;i++){
                    
                    arr.map(ob=> {
                        if(ob.date===t_data[i].Date){  
                            let withdraw= (t_data[i].Withdrawal_AMT).replace(/,/g, "");
                            let deposit = (t_data[i].Deposit_AMT).replace(/,/g, "");
                            ob.amount_transferred += deposit - withdraw;
                            ob.transactions++;
                        }
                        return ob;
                    })
                    
                    if(!arr.some(ob => ob.date ===t_data[i].Date)){ 
                        let withdraw= (t_data[i].Withdrawal_AMT).replace(/,/g, "");
                        let deposit = (t_data[i].Deposit_AMT).replace(/,/g, "");
                        let x={
                            id:id++,
                            date:t_data[i].Date,
                            transactions:1,
                            amount_transferred: deposit - withdraw
                        }
                        arr.push(x);
                    }  
                }
                
                //see arr[] in console..it contains 'total no. of transactions and total amount transferred' for each date
                //this data is used to create visualization chart
                console.log(arr);
                this.setState({totals:arr});
            })
        }
        
        //function to go on previous page
        this.previousPage=()=>{
          if(this.state.currentPage > 1){
              this.setState({
                currentPage: this.state.currentPage - 1,
                disable1:false,
                disable2:false
              })
          }else{
              this.setState({
                currentPage: this.state.currentPage - 1,
                disable1: true,
                disable2: false
              })
          }
        }
        
        //function to go on next page
        this.nextPage=()=>{
          if (this.state.currentPage < (this.state.totals.length / 9)-2){
              this.setState({
                currentPage: this.state.currentPage + 1,
                disable1:false,
                disable2:false
              })
          }else{
              this.setState({
                currentPage: this.state.currentPage + 1,
                disable1:false,
                disable2:true,
              })
          }
        }
         
    }
     
    render(){ 
            return(  
                <div className="container-fluid">
                
                <Navbar2 />
                
                <table className="table">
                <thead>
                  <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Date</th>
                    <th scope="col">Total No. of Transactions</th>
                    <th scope="col">Total Amount Transferred</th>
                  </tr>
                </thead>
                
                <tbody>
                {this.state.totals.slice((this.state.currentPage * 9), (this.state.currentPage * 9) + 9).map(total =>
                      <Total key={total.id} id={total.id} date={total.date}
                       transactions={total.transactions} amount_transferred={total.amount_transferred} />
                )}
               </tbody>
               </table>

                <center>
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={this.previousPage} disabled={this.state.disable1} className="btn btn-primary">Previous Page</button>
                    <button type="button" onClick={this.nextPage} disabled={this.state.disable2} className="btn btn-primary">Next Page</button>
                    </div>
                </center>

                </div>
            );
     }     
}

export default Totals;