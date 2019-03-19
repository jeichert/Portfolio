import {graphql} from 'gatsby';
import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import {SiteHeader, outer, inner, SiteMain} from '../styles/shared';
import * as React from 'react';
import {css} from '@emotion/core';
// import {AuthorProfileImage} from '../styles/shared'
import Img from 'gatsby'

import {NoImage, PostFull} from '../templates/post';
import {PostFullContent} from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css `
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
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
    width: 100%;
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
          css={[SiteMain, outer]}
          style={{
          padding: '0',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          {author.profile_image && (
            <article className="post page" css={[PostFull, NoImage]} style={{width: '50%'}}>
              <div css={AuthorImage}></div>
            </article>
          )}
          <PostFullContent className="post-full-content" style={{maxWidth: '50%'}}>
            <div className="post-content">
              <p>I am a registered architect in the State of New York with experience on both ground up multi-family, mixed use and commercial buildings, as well as corporate interiors and retail branches.</p>
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
