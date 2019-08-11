import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Herosection from "../components/Reuseable/Herosection"
import Infoblock from '../components/Reuseable/Infoblock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
const contact = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Herosection
      img={data.img.childImageSharp.fluid}
      title="About LCO"
      subtitle=""
      heroclass="about-background"
    />
    <Dualinfoblock
      heading = "Message From CEO"
      imgsrc="https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />

    <Infoblock
      heading="About Vision"
    />

   
    
  </Layout>
)
export const myquery = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default contact
