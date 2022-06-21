import React from 'react'

// Custom Component Import

import Header from './components/Header'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'

export default function App(){
    return(
        <div>
            <Header />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}