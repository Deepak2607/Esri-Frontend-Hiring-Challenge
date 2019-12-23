import React, { Component } from 'react';
import Navbar2 from "../Navbar/Navbar2";
import CanvasJSReact from './canvasjs.react';
import axios from 'axios';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Pie1 extends Component {
    
    constructor(){
        super();
        
        this.state={
            totals:[]
        }
        
        this.componentDidMount=()=> {
            
            //fetching data
            axios.get("https://deepak2607.github.io/Esri_jsondata.json").then( response=>{
                const t_data= response.data; 
                let arr=[],id=1;
                
                for(let i=0;i<t_data.length;i++){
                    
                    //date is taken as 'label'
                    //no. of transactions(for each date) is taken as 'y'
                    arr.map(ob=> {
                        if(ob.label===t_data[i].Date){  
                            ob.y++;
                        }
                        return ob;
                    })
                    
                    if(!arr.some(ob => ob.label ===t_data[i].Date)){ 
                        let x={
                            id:id++,
                            label:t_data[i].Date,
                            y:1
                        }
                        arr.push(x);
                    }  
                }
                
                //see arr[] in console..it contains 'total no. of transactions' for each date
                //this data is used to create pie chart
                console.log(arr);
                this.setState({totals:arr});
            })
        }
    
    }
     
	render() {
        
		const options = {
			theme: "dark2",
			animationEnabled: true,
			exportFileName: "Pie Chart 1",
			exportEnabled: true,
			title:{
				text: "Total No. of Transactions (for each Date)"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y} transactions</strong>",
				indexLabel: "{y}",
				indexLabelPlacement: "inside",
				dataPoints: this.state.totals
			}]
		}
		return (
		<div>
            <Navbar2 />
			<CanvasJSChart options = {options} onRef={ref => this.chart = ref} />
		</div>
		);
	}
}
export default Pie1;