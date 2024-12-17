import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import Hiring from './Hiring';
import News from './News';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Hiring></Hiring>
            <HotJobs></HotJobs>
            <News></News>
        </div>
    );
};

export default Home;