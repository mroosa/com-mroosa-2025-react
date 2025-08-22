import { useState, useEffect } from 'react';
import Intro from './sections/Intro';
import Contact from './sections/Contact';
import Work from './sections/Work';
import About from './sections/About';

const Sections = () => {

    
    return (
        <main>
            <Intro />
            <About />
            <Work />
            <Contact />
        </main>
    )
}

export default Sections;