import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../styles/index.scss"
import * as layoutStyles from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
