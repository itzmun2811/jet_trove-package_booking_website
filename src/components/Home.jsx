import React from 'react';
import Banner from './Banner';
import FeaturedPackage from '../pages/FeaturedPackage';
import Banner1 from './Banner1';
import TopDestination from '../pages/TopDestination';
import ExclusiveDeals from '../pages/ExclusiveDeals';

const Home = () => {
    return (
        <>
        <Banner1></Banner1>
        <TopDestination></TopDestination>
    <FeaturedPackage></FeaturedPackage>
    <ExclusiveDeals></ExclusiveDeals>
    
        </>
    );
};

export default Home;