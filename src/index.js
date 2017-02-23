import React from 'react';
import ReactDOM from 'react-dom';
import PRODUCTS from './data';

import './index.css';

import FilterableProductTable from './FilterableProductTable';

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);
