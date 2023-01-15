import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from "../../components/_Layout"
import * as styles from '../../styles/project.module.css'

export default function introduction({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes
  const contact = data.contacts.siteMetadata.email

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites</h3>
        <div className={styles.projects}>

          {projects.map(project => (
            <Link to={"/docs/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Contact: { contact }</p>
      </div>
    </Layout>
  )
}


export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {frontmatter: {date: ASC}}) {
    nodes {
      frontmatter {
        author
        slug
        stack
        title
        date
      }
      id
    }
  },
  contacts: site {
    siteMetadata {
      email
    }
  }
}
`