import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image, Badge } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ name, link }) => (
    <Badge key={name} pill className="mr-2 p-0 px-3 resume-tags">
      <h4>
        <small><a href={link} target="_blank">{name}</a></small>
      </h4>
    </Badge>
  )

  const {
    author,
    email,
    occupation,
    technlogiesList,
    toolsList,
    attributes,
    lookingForJobs,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const technlogies = technlogiesList.map(tech => MediaLink(tech))
  const tools = toolsList.map(tool => MediaLink(tool))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="140"
          height="140"
          src={`../../icons/avatar.png`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {attributes.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < attributes.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="text-justify">
            Hello there! My name is <b>{`${author}`}</b>. I am a
            &nbsp;
            <b>{occupation}</b> and a forever learner.
          </p>
          <p className="text-justify">
            Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p className="text-justify">
            In my spare time, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="v">
            Check out my <Link to="/projects">projects</Link> to see what I've
            been up to! Or check out my <Link to="/blog">blog</Link> to see
            what's recently caught my eye!
          </p>
        </article>
        <article className="w-75 m-auto">
          {lookingForJobs && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Here are a couple of technologies that I use every day:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{technlogies}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of tools that I use every day:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{tools}</ul>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        lookingForJobs
        email
        occupation
        author
        attributes
        technlogiesList {
          name
          link
        }
        toolsList {
          name
          link
        }
      }
    }
  }
`
