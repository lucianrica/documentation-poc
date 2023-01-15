import { graphql } from 'gatsby'
import React from 'react'
import Layout from "../components/_Layout"
import * as styles from '../styles/markdown.module.css'

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

export default function MarkdownToHtml({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, author } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <section className={styles.details}>
        <h1>{title}</h1>
        <h3>{stack}</h3>
        <h6>Author: {author}</h6>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }}>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
    query MarkdownPage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                stack
                date
                author
            }
        }
    }
`