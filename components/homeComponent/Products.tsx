import React from 'react';
import AllProducts from './products/AllProducts';
import WeekBest from './products/WeekBest';

const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mx-20">
      <div className="col-span-1">
        <div className="h-fit flex items-center justify-center">
          <WeekBest />
        </div>
      </div>
      <div className="col-span-2">
        <AllProducts />
      </div>
    </div>
  );
};

export default Products;
