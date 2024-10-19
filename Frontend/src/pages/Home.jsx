import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offer from '../components/Offer';
import New_Collection from '../components/New_Collection';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
    return (
        <>
            <Hero/>
            <Popular/>
            <Offer/>
            <New_Collection/>
            <NewsLetter/>
        </>
    )
}

export default Home
