import React from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
