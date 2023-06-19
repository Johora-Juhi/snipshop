import React from 'react';
import ShopbyCategory from '../ShopbyCategory/ShopbyCategory';
import PopularBrands from '../PopularBrands/PopularBrands';
import ProductSeller from '../ProductSeller/ProductSeller';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import TrendingProducts from '../TrendingProducts/TrendingProducts';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <TrendingProducts></TrendingProducts>
            <ShopbyCategory></ShopbyCategory>
            <FeaturedProduct></FeaturedProduct>
            <PopularBrands></PopularBrands>
            <ProductSeller></ProductSeller>
        </div>
    );
};

export default Home;