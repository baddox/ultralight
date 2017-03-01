import React, { PureComponent } from 'react';

import Actions from './Actions';

class ItemList extends PureComponent {
  
  render() {
    var tableRows = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.grams}</td>
          <td>
            <button
               className="pure-button button-small"
               onClick={Actions.removeItem.bind(this, item.id)}
               >Remove</button>
          </td>
        </tr>
      );
    });
    
    return this.props.items.length === 0 ? null : (
      <table className="pure-table pure-table-horizontal">
        <thead>
          <tr>
            <th>Item</th>
            <th>Weight</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }
}

export default ItemList;
