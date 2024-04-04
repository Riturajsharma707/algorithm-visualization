import React from 'react'
import { Navbar } from './Navbar';
import { Greet } from './Greet';
import { Mytypewriter } from './Mytypewriter';
import { Footer } from './Footer';
import { Cards } from './Cards';

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Greet />
            <Mytypewriter />
            <Cards />

            <Footer />
        </React.Fragment>
    )


}

export default Home;