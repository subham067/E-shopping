import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Review from './Review'

function Allreview() {
    return (
        <>
            <Header />
            <div className='mt-7'>
                <Review />
            </div>
            <Footer />
        </>
    )
}

export default Allreview