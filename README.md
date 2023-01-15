# play-with-gatsby

` gatsby new `
` npm run develop `

query MyQuery {
  allFile(filter: {sourceInstanceName: {eq: "notes"}}) {
    nodes {
      relativePath
      relativeDirectory
    }
  }
}
