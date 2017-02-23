import React from 'react';
import ReactDOM from 'react-dom';
import PRODUCTS from './data';

import './index.css';

// import ProductRow from './ProductRow';
// import ProductCategoryRow from './ProductCategoryRow';
import FilterableProductTable from './FilterableProductTable';

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);
