/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"

import './bootstrap.min.css'
import "./layout.css"

// Components
import Footer from './Reuseable/Footer'
import Navbar from './Reuseable/Navbar'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Navbar/>
        <main>{children}</main>  
      <Footer/>
      </div>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
