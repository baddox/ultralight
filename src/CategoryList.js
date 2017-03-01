import React, { Component } from 'react';

import { PureComponent } from 'reflux';
import CategoriesStore from './stores/CategoriesStore';
import Category from './Category';
import Actions from './Actions';

class CategoryList extends PureComponent {
  constructor(props) {
    super(props);
    this.store = CategoriesStore;
  }

  render() {
    var categories = this.state.categories.map((category) =>
                                               <li key={category.id}><Category {...category} /></li>
                                              );
    return (
      <div>
        <ul>
          {categories}
        </ul>
        <button className="pure-button" onClick={Actions.addCategory}>
          + Category
        </button>
      </div>
    );
  }
}

export default CategoryList;
