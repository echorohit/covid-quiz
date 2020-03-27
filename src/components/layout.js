/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, TelegramShareButton } from "react-share";
import {
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  TwitterIcon
} from "react-share";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          url
          description,
          share
        }
      }
    }
  `)

  return (
    <div className="main-app">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          {children}
        </main>
      </div>
      <footer>
        <div className="social-share">
          <h4>Spread awareness! Share now</h4>
          <div className="social-btns">
            <FacebookShareButton
              url={data.site.siteMetadata.url}
              quote={data.site.siteMetadata.share}>
              <FacebookIcon size={64} ></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton
              url={data.site.siteMetadata.url}
              title={data.site.siteMetadata.share}>
              <TwitterIcon size={64} />
            </TwitterShareButton>
            <WhatsappShareButton
              url={data.site.siteMetadata.url}
              title={data.site.siteMetadata.share}>
              <WhatsappIcon size={64}></WhatsappIcon>
            </WhatsappShareButton>
            <TelegramShareButton
              url={data.site.siteMetadata.url}
              title={data.site.siteMetadata.share}
              separator=":: ">
              <TelegramIcon size={64}></TelegramIcon>
            </TelegramShareButton>
          </div>
        </div>
      </footer>
    </div >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
