
function Table() {
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
export default Table;