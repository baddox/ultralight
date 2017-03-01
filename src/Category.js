import React, { PureComponent } from 'react';

import ItemList from './ItemList';
import Actions from './Actions';

class Category extends PureComponent {
  render() {
    return (
      <div>
        <p>
          <strong>{this.props.name}</strong>
          <a
             href="#"
             style={{marginLeft: '1em'}}
             onClick={Actions.removeCategory.bind(this, this.props.id)}
             >x</a>
        </p>
        <ItemList items={this.props.items} />
        <button
           style={{marginTop: '1em'}}
           className="pure-button button-small"
           onClick={Actions.addItem.bind(this, this.props.id)}
           >+ Item</button>
      </div>
    );
  }
}

export default Category;
