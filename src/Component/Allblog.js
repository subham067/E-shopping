import React from 'react'
import Blog from './Blog'
import Footer from './Footer'
import Header from './Header'

function Allblog() {
    return (
        <>
            <Header />
            <div className="mt-7">
                <Blog />
            </div>

            <Footer />
        </>
    )
}

export default Allblog