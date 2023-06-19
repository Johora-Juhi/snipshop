import React from 'react';
import ShopbyCategory from '../ShopbyCategory/ShopbyCategory';
import PopularBrands from '../PopularBrands/PopularBrands';
import ProductSeller from '../ProductSeller/ProductSeller';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <ShopbyCategory></ShopbyCategory>
            <PopularBrands></PopularBrands>
            <ProductSeller></ProductSeller>
        </div>
    );
};

export default Home;