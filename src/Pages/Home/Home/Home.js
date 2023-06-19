import React from 'react';
import ShopbyCategory from '../ShopbyCategory/ShopbyCategory';
import PopularBrands from '../PopularBrands/PopularBrands';
import ProductSeller from '../ProductSeller/ProductSeller';

const Home = () => {
    return (
        <div>
            <ShopbyCategory></ShopbyCategory>
            <PopularBrands></PopularBrands>
            <ProductSeller></ProductSeller>
        </div>
    );
};

export default Home;