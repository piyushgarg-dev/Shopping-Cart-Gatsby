import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Herosection from "../components/Reuseable/Herosection"
import infoblock from '../components/Reuseable/infoblock'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Herosection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="Learn Code Online"
      heroclass="hero-background"
    />
     
    <infoblock
      heading="About"
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
