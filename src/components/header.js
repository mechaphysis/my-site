import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import pic from '../assets/pic-placeholder.png'
import headerStyles from "./header.module.scss"

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
            }
            }
        }
    `)
    
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.home}>
                <Link to="/">
                    <img className={headerStyles.pic} src={pic} alt='Esperanza Natalia'></img>
                </Link>
                <p>
                    <Link className={headerStyles.title} to='/'>
                        {data.site.siteMetadata.title}
                    </Link>
                </p>
            </div>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header