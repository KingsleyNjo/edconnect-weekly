import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    return(
        <>
            <Header username={props.username}/>

                <main className="mx-auto">
                    {props.children}  {/* we call an inheritance here for everywhere Layout component will be used */}
                </main>

            <Footer/>
        </>
    )

}

export default Layout;