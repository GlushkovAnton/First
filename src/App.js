
import React, { Component } from 'react';
import './App.css';
import Table from './Table.js';
import Form from './Form.js';
import TableNew from './TableNew';

export class App extends Component { 
  constructor(props){
    super(props);
    this.state = {
      dateReg: ['26.02.2020, 18:25:57'],
      kioskName: ['Киоск № 11'],
      chequeType: ['Продажа'],
      statusPay: ['Оплачено'],
      pays: ['950Р'],
      sum: ['950Р'],
      quantity: ['2'],
      positions: ['Морс клюква из вологодской области'],
    }
  }
  
  updateData = (currentDateReg, 
                currentKioskName, 
                currentChequeType, 
                currentStatusPay, 
                currentPays, 
                currentSum, 
                currentQuantity, 
                currentPositions) => {
    this.setState({
      
      dateReg: this.state.dateReg.concat(currentDateReg),
      kioskName: this.state.kioskName.concat(currentKioskName),
      chequeType: this.state.chequeType.concat(currentChequeType),
      statusPay: this.state.statusPay.concat(currentStatusPay),
      pays: this.state.pays.concat(currentPays),
      sum: this.state.sum.concat(currentSum),
      quantity: this.state.quantity.concat(currentQuantity),
      positions: this.state.positions.concat(currentPositions),
    })
  }
  
  render(){
    
    
    
    return(
      <div>
        <div>
           <h1> Main App </h1>
        </div>
        <div>
            <Table dateReg={this.state.dateReg}
                   kioskName={this.state.kioskName}
                   chequeType={this.state.chequeType}
                   statusPay={this.state.statusPay}
                   pays={this.state.pays}
                   sum={this.state.sum}
                   quantity={this.state.quantity}
                   positions={this.state.positions}
              />
        </div>
        <div>
            <Form updateData={this.updateData} />
        </div>

        
        <div>
          New Table:
          
          <TableNew />
        </div>
        
      </div>
    )
  }
}

export default App;
