import React from "react"
import { Link } from 'gatsby';

import Layout from "../components/layout"
import Image from "../components/tuttle"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>I just wanted to let you know that I am an award winning developer.</p>
    <p>Now go build something refreshing.</p>
    <p><Link to="jp">See the old news</Link></p>
  </Layout>
)

export default IndexPage
