import React, { Component } from 'react';
import Transactions from './components/Transactions/Transactions';
import Totals from './components/Totals/Totals';
import Pie1 from './components/Charts/Pie1';
import Pie2 from './components/Charts/Pie2';
import Column1 from './components/Charts/Column1';
import Column2 from './components/Charts/Column2';
import Charts from './components/Charts/Charts';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
    
    render () {
        
        return (
            <div>
            
            <div className="container-fluid">
            <Switch>
            <Route path="/" exact component={Transactions} />
            <Route path="/totals" exact component={Totals} />
            <Route path="/charts/pie1" exact component={Pie1} />
            <Route path="/charts/pie2" exact component={Pie2} />
            <Route path="/charts/column1" exact component={Column1} />
            <Route path="/charts/column2" exact component={Column2} />
            <Route path="/charts" exact component={Charts} />
            </Switch>
            </div>
            
            </div>
    );
  }  
}

export default App;