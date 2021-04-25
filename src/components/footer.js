import React from "react"
import * as footerStyles from "./footer.module.scss"
import { graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          year
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by {data.site.siteMetadata.author}, ©{" "}
        {data.site.siteMetadata.year}
      </p>
    </footer>
  )
}
