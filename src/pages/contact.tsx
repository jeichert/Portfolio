import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import {SiteHeader, outer, inner, SiteMain} from '../styles/shared';
import * as React from 'react';
import {css} from '@emotion/core';

import {PostFullHeader, PostFullTitle, NoImage, PostFull} from '../templates/post';
import {PostFullContent} from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css `
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
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
                <li><input type="reset" value="Clear"/></li>
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
