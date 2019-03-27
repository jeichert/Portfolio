import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import {SiteHeader, outer, inner, SiteMain} from '../styles/shared';
import * as React from 'react';
import {css} from '@emotion/core';

import {PostFullHeader, PostFullTitle, NoImage, PostFull} from '../templates/post';
import {PostFullContent} from '../components/PostContent';
import {colors} from '../styles/colors';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css `
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }

  form {
    width: 100%;

    ul {
      list-style: none;
      display: flex;
      align-items: baseline;
      justify-content: flex-end;
      padding: 1.5rem;


      li {
        float: right;

        .special {
          border: 1px solid ${colors.whitegrey};
          height: 5rem;
          background: ${colors.whitegrey};
        }
      }
    }
  }

  .field {
    margin: 0 auto;
    padding: 1.5rem;
    
    &.half {
      width: 50%;
      float: left;
      
      @media (max-width: 500px) {
        width: 100%;
      }

      &.first {
        padding-right: 1.5rem;
      }
    }

    label {
      width: 25%;
      display: block;
      padding-right: 4rem;
      text-transform: uppercase;
    }

    input[type="text"],
    input[type="password"],
    input[type="email"],
    input[type="tel"],
    input[type="search"],
    input[type="url"],
    select,
    textarea {
      background: ${colors.whitegrey};
      border: none;
      border-radius: 0;
      color: inherit;
      display: block;
      outline: 0;
      padding: 0 1em;
      text-decoration: none;
      width: 100%;
      font-size: 2rem;

      &:invalid {
        box-shadow: none;
      }

      &:focus {
        border-color: ${colors.lightgrey};
        box-shadow: 0 0 0 2px ${colors.lightgrey};
        border: 1px;
      }
    }

    textarea {
      padding: 0.75em 1em;
    }

    input[type="checkbox"],
    input[type="radio"], {
      display: block;
      float: left;
      margin-right: -2em;
      opacity: 0;
      width: 1em;
      z-index: -1;
    }
`;

const Contact : React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav/>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>Contact</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field">
              <input type="hidden" name="bot-field"/>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"/>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6"></textarea>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Send Message" className="special"/></li>
              </ul>
            </form>
          </PostFullContent>
        </article>
      </main>
      <Footer/>
    </Wrapper>
  </IndexLayout>
);

export default Contact;
