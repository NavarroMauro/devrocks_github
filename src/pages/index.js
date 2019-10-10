import React from "react"
import Contact from "../components/contact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Contact />
  </Layout>
)

export default IndexPage
