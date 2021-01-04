import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {

  const Link = ({ title, icon, link, prefix }) => (
    <a
      key={link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        icon={[prefix, icon]}
        className="icons"
        title={title}
      />
    </a>
  )

  const { lookingForJobs, firstName, lastName, occupation, links } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)

  const Links = links.map(link => Link(link))

  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          width="150"
          height="150"
          fluid
          src='../../icons/avatar.png'
        />
        {lookingForJobs && (
          <p className="mt-2">
            <b> Hey! I am looking for new opportunities :)</b>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p>
            <i>
              {occupation}
            </i>
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          {Links}
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        lookingForJobs
        firstName
        lastName
        occupation
        links {
          title
          prefix
          icon
          link
        }
      }
    }
  }
`
