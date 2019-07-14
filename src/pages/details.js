import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../utils/seo"

const DetailPage = () => (
  <Layout>
    <SEO title="Details Page" />
    <h1>Hi from the details page</h1>
    <p>Details Page is the second page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DetailPage
