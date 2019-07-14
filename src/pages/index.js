import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import FluidImage from '../components/image'
import SEO from "../utils/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <FluidImage />
    </div>
    <Link to="/details/">Details Page</Link>
  </Layout>
)

export default IndexPage
