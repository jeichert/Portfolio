import {graphql} from 'gatsby';
import * as React from 'react';
import {css} from '@emotion/core';
import Helmet from 'react-helmet';
// import {AuthorProfileImage} from '../styles/shared'

import {NoImage, PostFull} from '../templates/post';
import {PostFullContent} from '../components/PostContent';
import Footer from '../components/Footer';
import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import {SiteHeader, outer, inner, SiteMain} from '../styles/shared';

const PageTemplate = css `
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const MainWrapper = css `
  @media (min-width: 700px) {
    display: flex;
  }
`;
const DescriptionWrapper = css ` 
  flex-grow: 1;
  padding: 1.5rem;
`;

const PostImage = css `
  min-width: 50%;
`;

const Description = css `
  font-size: 1.5rem;
`;

interface AuthorTemplateProps {
  pathContext : {
    slug: string;
  };
  pageContext : {
    author: string;
  };
  data : {
    logo: {
      childImageSharp: {
        fluid: any;
      };
    };
    authorYaml: {
      id: string;
      website?: string;
      archinect?: string;
      facebook?: string;
      location?: string;
      profile_image?: {
        childImageSharp: {
          fluid: any;
        };
      };
      bio?: string;
      avatar: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
  };
}

const About : React.FunctionComponent < AuthorTemplateProps > = props => {
  const author = props.data.authorYaml;

  const AuthorImage = css `
    background-image: url(${author.profile_image.childImageSharp.fluid.src});
    min-height: 90vh;
    background-repeat: no-repeat;
    background-size: cover;

    background-position: center center;
    
    @media (min-width: 700px) {
      min-width: 50%;
    }
  `
  return (
    <IndexLayout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header css={[outer, SiteHeader]}>
          <div css={inner}>
            <SiteNav/>
          </div>
        </header>
        <main
          id="site-main"
          className="site-main"
          css={[SiteMain, outer, MainWrapper]}
          style={{
          minHeight: '90vh',
          alignItems: 'center',
        }}>
          {author.profile_image && (
            <article className="post page" css={[PostFull, NoImage, PostImage]}>
              <div css={AuthorImage}></div>
            </article>
          )}
          <PostFullContent className="post-full-content" css={DescriptionWrapper}>
            <div className="post-content">
              <p>Hello, I’m <strong>Jeff Eichert</strong>, a registered architect in the state of New York. 
              Find me on <a href="https://instagram.com/jeichert" target="_blank">Instagram</a>, <a href="https://archinect.com/jeffreyeichert" target="_blank">Archinect</a>, <a href="https://www.linkedin.com/in/jeffreyeichert/" target="_blank">LinkedIn</a>, <a href="https://www.facebook.com/jeffrey.eichert" target="_blank">Facebook</a>.
              </p>
              <p css={Description}>
              I have experience in both ground up multi-family, mixed use and commercial buildings, 
              as well as corporate interiors and retail branches. Feel free to reach out to me anywhere, or download my <a href="https://www.dropbox.com/s/hi49dlaxt1gg115/J%20Eichert_Resume_2019.pdf?dl=0" target="_blank">resume</a>.
              </p>
            </div>
          </PostFullContent>
        </main>
        <Footer/>
      </Wrapper>
    </IndexLayout>
  );
}

export default About;

export const pageQuery = graphql `
  query($author: String) {
    authorYaml(id: { eq: $author }) {
      id
      website
      archinect
      bio
      facebook
      location
      profile_image {
        childImageSharp {
          fluid(maxWidth: 3720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avatar {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
