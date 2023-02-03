import React from 'react';
import AllData from './AllData';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <AllData/>
            <Footer/>
        </div>
    );
};

export default Home;