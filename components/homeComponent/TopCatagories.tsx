import React from 'react';
import Bags from './catagories/Bags';
import Books from './catagories/Books';
import Electronics from './catagories/Electronics';
import Fashion from './catagories/Fashion';
import Mobile from './catagories/Mobile';

const TopCatagories = () => {
  return (
    <div>
      <h3 className="text-primary ml-6 mb-8">Top Catagories</h3>
      <div className="flex space-x-2 justify-center">
        <Electronics />
        <Fashion />
        <Mobile />
        <Books />
        <Bags />
      </div>
    </div>
  );
};

export default TopCatagories;
