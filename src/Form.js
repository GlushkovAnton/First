
import React, { Component } from 'react';

export class Form extends Component{
    constructor(props) {
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
      
      this.handleChangeDateReg = this.handleChangeDateReg.bind(this);
      this.handleChangeKioskName = this.handleChangeKioskName.bind(this);
      this.handleChangeChequeType = this.handleChangeChequeType.bind(this);
      this.handleChangeStatusPay = this.handleChangeStatusPay.bind(this);
      this.handleChangePays = this.handleChangePays.bind(this);
      this.handleChangeSum = this.handleChangeSum.bind(this);
      this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
      this.handleChangePositions = this.handleChangePositions.bind(this);
      this.submitAddCheque = this.submitAddCheque.bind(this);
      
      
             
    }
    
    handleChangeDateReg(event) {
      this.setState({
        dateReg: event.target.value
      });
    }
    
    handleChangeKioskName(event) {
      this.setState({
        kioskName: event.target.value
      });
    }
    
    handleChangeChequeType(event) {
      this.setState({
        chequeType: event.target.value
      });
    }
    
    handleChangeStatusPay(event) {
      this.setState({
        statusPay: event.target.value
      });
    }
    
    handleChangePays(event) {
      this.setState({
        pays: event.target.value
      });
    }
    
    handleChangeSum(event) {
      this.setState({
        sum: event.target.value
      });
    }
    
    handleChangeQuantity(event) {
      this.setState({
        quantity: event.target.value
      });
    }
    
    handleChangePositions(event) {
      this.setState({
        positions: event.target.value
      });
    }
    
    submitAddCheque() {
      this.props.updateData(this.state.dateReg, 
                            this.state.kioskName,
                            this.state.chequeTyp,
                            this.state.statusPay,
                            this.state.pays,
                            this.state.sum,
                            this.state.quantity,
                            this.state.positions)
      
    }
    
    
    render() {
      return (
        <div>
          <h2>Форма добавления чека</h2>
          Дата покупки <input
            value={this.state.dateReg}
            onChange={this.handleChangeDateReg}/><br/>
          Киоск <input
            value={this.state.kioskName}
            onChange={this.handleChangeKioskName}/><br/>
          Тип <input
            value={this.state.chequeType}
            onChange={this.handleChangeChequeType}/><br/>
          Статус оплаты <input
            value={this.state.statusPay}
            onChange={this.handleChangeStatusPay}/><br/>
          Оплата <input
            value={this.state.pays}
            onChange={this.handleChangePays}/><br/>
          Сумма <input
            value={this.state.sum}
            onChange={this.handleChangeSum}/><br/>
          Кол-во товара <input
            value={this.state.quantity}
            onChange={this.handleChangeQuantity}/><br/>
          Товары <input
            value={this.state.positions}
            onChange={this.handleChangePositions}/><br/>
          <button onClick={this.submitAddCheque}>Добавить чек</button>
          
          
          
          
          
          
        </div> 
      );
    }
  }

  export default Form;
  