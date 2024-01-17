import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <div className="layout">
            <header>
                <ul>
                    <li>Entourage</li>
                    <li>Principal Sponsors</li>
                    <li>Attires</li>
                </ul>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>Made by IsaiconSpace!</p>
            </footer>
        </div>
    )
}

export default Layout