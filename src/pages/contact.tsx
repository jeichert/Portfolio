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
            <div className="post-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
                corporis, natus dolore voluptate recusandae alias cumque deleniti dignissimos
                magnam dolorem excepturi? Minima vero, obcaecati atque unde assumenda dicta
                deserunt possimus? Itaque quasi, facilis sequi, non vero aliquid ducimus
                consequatur dolorum eligendi recusandae quaerat est blanditiis tempore minima
                eum! Veniam delectus temporibus ratione id asperiores aspernatur iste repellat
                nihil ex tempore? Libero aut necessitatibus vitae illum, assumenda doloribus
                aliquam perspiciatis id odit dolor molestiae earum iste debitis, accusamus ad
                officiis amet culpa sit architecto illo ut nisi. Nesciunt placeat quasi fugiat?
                A nemo perferendis neque excepturi repellat nam tempora illo quo voluptas,
                repudiandae, iusto dolorem accusantium ducimus eaque in provident minus! Quasi
                exercitationem incidunt omnis quis explicabo cumque nulla facilis magni. Dolorum
                iste odit inventore ut atque iusto beatae dicta, doloremque quis. Fugiat
                dignissimos fuga libero. Ad aliquid eum rem, laboriosam iste ducimus natus nam
                nihil velit fugiat quo quos distinctio. Repellat corporis facere accusamus,
                suscipit sunt omnis minima aperiam ea vero eaque veniam! Assumenda totam ut qui
                cumque tenetur laborum officia quis expedita modi asperiores, quidem, cum
                perspiciatis quasi suscipit! Nostrum ipsa, at reiciendis quibusdam facere
                asperiores, voluptate natus deleniti omnis unde aliquam pariatur in assumenda
                quae dignissimos incidunt repudiandae id tenetur voluptatum sit repellat
                officiis dolores rem eaque. Velit. Asperiores fugiat consectetur earum
                voluptatem! Obcaecati voluptatem vitae quidem sapiente culpa fuga dicta quaerat
                error quisquam tenetur. Velit unde hic fugit maiores illo dicta, quae delectus
                sapiente repellendus corporis debitis? Optio, accusantium quae repellendus,
                voluptas molestias est odio deleniti consequatur consectetur repudiandae saepe
                sint aliquid in a impedit quas maxime laboriosam eos possimus porro ullam
                quaerat iste enim! Quibusdam, amet? Tempore ea exercitationem magni minima
                molestias debitis qui itaque dolorum provident veniam perspiciatis labore,
                voluptatum, quam aliquam illo rem. Repellendus illo quidem ea eum ut animi
                excepturi quisquam distinctio deleniti?</p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer/>
    </Wrapper>
  </IndexLayout>
);

export default Contact;
