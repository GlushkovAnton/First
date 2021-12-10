import React, { Component } from 'react';

//import "bootstrap/dist/css/bootstrap.css";
//import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";

export class TableNew extends Component {
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
    
    const products = [];
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
        
        <BootstrapTable keyField='id' data={ products } columns={ columns } />
        
        
          
        
        
        
      </div> 
    );
  }
}


export default TableNew;