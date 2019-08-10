import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Herosection from "../components/Reuseable/Herosection"
import Infoblock from '../components/Reuseable/Infoblock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Herosection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="Learn Code Online"
      heroclass="hero-background"
    />
     
    <Infoblock
      heading="About"
    />

    <Dualinfoblock
      heading = "Our Team"
      imgsrc="https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
    
  </Layout>
)
export const myquery = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
