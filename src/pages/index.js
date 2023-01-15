import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/_Layout"
import * as styles from '../styles/home.module.css'





const IndexPage = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <h2>Nice</h2>
        <h3>Website</h3>
        <p>test</p>
        <Link className={styles.btn} to="/docs/introduction">Introduction</Link>
        <StaticImage src="../images/doc.jpg" alt="test"></StaticImage>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>docs</title>
