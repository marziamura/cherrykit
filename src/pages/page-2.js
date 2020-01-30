import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CubeImg from "../components/cube2"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the eidtor</h1>
    <CubeImg/>
  </Layout>
)

export default SecondPage
