import React, { Component } from 'react';

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //dateReg: ['26.02.2020, 18:25:57'],
      //kioskName: ['Киоск № 11'],
      //chequeType: ['Продажа'],
      //statusPay: ['Оплачено'],
      //pays: ['950Р'],
      //sum: ['950Р'],
      //quantity: ['2'],
      //positions: ['Морс клюква из вологодской области'],  
    }
  }
  
  
  
  
  render() {
    
  const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];
   
   
    
    
    return (
      <div>
        <table border="1">
          <caption> <h2>Таблица оплат товара</h2></caption>
          <tr>
            <th>Дата покупки</th>
            <th>Киоск </th>
            <th>Тип</th>
            <th>Статус оплаты</th>
            <th>Оплата</th>
            <th>Сумма</th>
            <th>Кол-во товара</th>
            <th>Товары</th>
          </tr>
          
          <tr>
            <th>{this.props.dateReg}</th>
            <th>{this.props.kioskName} </th>
            <th>{this.props.chequeType}</th>
            <th>{this.props.statusPay}</th>
            <th>{this.props.pays}</th>
            <th>{this.props.sum}</th>
            <th>{this.props.quantity}</th>
            <th>{this.props.positions}</th>
          </tr>
          
          
          
        </table>
        
        
        
          
        
        
        
      </div> 
    );
  }
}


export default Table;