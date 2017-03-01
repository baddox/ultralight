import { Store } from 'reflux';

import Actions from '../Actions';

class CategoriesStore extends Store {
  constructor() {
    super();
    
    this.state = {
      categories: [
        {
          name: "Sleep",
          id: 1,
          items: [
            {
              name: "Katabatic Gear Quilt",
              grams: 567,
              id: 1
            },
            {
              name: "NeoAir XTherm Large",
              grams: 680,
              id: 2
            }
          ]
        },

        {
          name: "Clothing",
          id: 2,
          items: [
            {
              name: "Mountain Hardwear Ghost Whisperer",
              grams: 227,
              id: 3
            },
            {
              name: "Patagonia Capilene 4 Quarter Zip Top",
              grams: 397,
              id: 4
            }
          ]
        }
      ]
    };

    this.lastCategoryId = 2;
    this.lastItemId = 4;
    
    this.listenToMany(Actions);
  }

  addCategory() {
    var newCategory = {name: "New", id: ++this.lastCategoryId, items: []};
    this.setState({
      ...this.state,
      categories: [...this.state.categories, newCategory]
    });
  }

  removeCategory(id) {
    var categories = this.state.categories.filter(category => category.id !== id);
    this.setState({...this.state, categories});
  }

  addItem(categoryId) {
    var categories = this.state.categories.map(category => {
      if (category.id === categoryId) {
        var newItem = {name: "New", id: ++this.lastItemId, grams: 0};
        return {...category, items: [...category.items, newItem]};
      } else {
        return category;
      }
    });

    this.setState({...this.state, categories});
  }

  removeItem(id) {
    var categories = this.state.categories.map(category => {
      var items = category.items.filter(item => item.id !== id);
      return {...category, items};
    });

    this.setState({...this.state, categories});
  }
}

export default CategoriesStore;
