import React, { Component } from 'react';
import axios from 'axios';
import Transaction from "./Transaction";
import Navbar1 from "../Navbar/Navbar1";

class Transactions extends Component{
    
    constructor(){
        super();
        
        this.state={
            transactions:[],
            filteredTransactions:[],
            query: '',
            currentPage:0,
            disable1:true,
            disable2:false
        }
        
        
        this.componentDidMount=()=> {
            //fetching data
            axios.get("https://deepak2607.github.io/Esri_jsondata.json").then( response=>{
                
                const t_data= response.data; 
                //see t_data[] in console..it contains the fetched data, this data is stored in state.transactions
                console.log(t_data);    
                let x=0;
                const { query } = this.state;
                let updated_data= t_data.map(transaction=> {
                    x++;
                    return{
                        ...transaction,
                        id:x
                    }
                })
                
                let filteredData = updated_data.filter(transaction => {
                  return transaction.Transaction_Details.toLowerCase().includes(query.toLowerCase());
                });
                
                this.setState({
                    transactions:updated_data,
                    filteredTransactions:filteredData
                });
            })
        }
    
        //function to handle change in search bar (in navbar)
        this.handleInputChange =(event)=> {
            
            let query= event.target.value;
            let filteredData = this.state.transactions.filter(transaction => {
                return transaction.Transaction_Details.toLowerCase().includes(query.toLowerCase());
            });
            
            console.log(filteredData.length);
            this.setState({
                query:query,
                filteredTransactions:filteredData,
                disable2: (filteredData.length <= 9) ? true : false,
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
            
          if (this.state.currentPage < (this.state.filteredTransactions.length / 9)-2){
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
                
                <div className="searchForm">
                <Navbar1 query= {this.state.query} handleInputChange={this.handleInputChange} />
                </div>

                <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Transaction ID</th>
                    <th scope="col">Account No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Transaction Details</th>
                    <th scope="col">Value Date</th>
                    <th scope="col">Withdrawal AMT</th>
                    <th scope="col">Deposit AMT</th>
                    <th scope="col">Balance AMT</th>
                  </tr>
                </thead>
                
                <tbody>
                {this.state.filteredTransactions.slice((this.state.currentPage * 9), (this.state.currentPage * 9) + 9).map(transaction =>
                      <Transaction key={transaction.id} id={transaction.id} account_no={transaction.Account_No} date={transaction.Date}
                       transaction_details={transaction.Transaction_Details} value_date={transaction.Value_Date} withdrawal_amt={transaction.Withdrawal_AMT} deposit_amt={transaction.Deposit_AMT} balance_amt={transaction.Balance_AMT} />
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

export default Transactions;