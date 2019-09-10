import React from "react"
import Header from "./header";
import Footer from "./footer";

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import PixelViewContent from "./Pixel/PixelViewContent";

const Layout = (props) => {

    return (
        <body>
            <PixelViewContent></PixelViewContent>
            <Header />
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </body>

    )
}

export default Layout