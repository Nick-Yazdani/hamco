import React from 'react';
import {
  faHardHat,
  faShovel,
  faTools,
  faHammer,
  faPencil,
  faPencilRuler,
} from '@fortawesome/pro-light-svg-icons';

import {
  Layout,
  Landing,
  Who,
  Stats,
  Services,
  Portfolio,
  Testimonial,
  Contact
} from '../components/index';

const ServicesData = [
  {
    title_left: 'Construction',
    details_left:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ea distinctio quisquam saepe ratione repudiandae deserunt magni unde ab.',
    icon_left: faHardHat,
    title_right: 'Industrial',
    details_right:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ea distinctio quisquam saepe ratione repudiandae deserunt magni unde ab.',
    icon_right: faShovel,
  },
  {
    title_left: 'Engineering',
    details_left:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ea distinctio quisquam saepe ratione repudiandae deserunt magni unde ab.',
    icon_left: faTools,
    title_right: 'Design',
    details_right:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ea distinctio quisquam saepe ratione repudiandae deserunt magni unde ab.',
    icon_right: faHammer,
  },
  {
    title_left: 'Maintenance',
    details_left:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ea distinctio quisquam saepe ratione repudiandae deserunt magni unde ab.',
    icon_left: faPencil,
    title_right: 'Architecture',
    details_right:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ea distinctio quisquam saepe ratione repudiandae deserunt magni unde ab.',
    icon_right: faPencilRuler,
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <Landing
        heading={`Making your dream home come to life`}
        text={`learn more`}
      />
      <main>
        <Who
          title={`One of the largest construction companies`}
          mainParagraph={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos provident esse repudiandae corrupti temporibus exercitationem odio quidem totam in, sunt mollitia explicabo tenetur quibusdam nobis id placeat. Quaerat, hic earum.`}
          smhOne={`Professional Team`}
          smhTwo={`Quality Work`}
          smpOne={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor dignissimos, inventore at odio asperiores illo dolores cum suscipit? Voluptates, deleniti.`}
          smpTwo={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor dignissimos, inventore at odio asperiores illo dolores cum suscipit? Voluptates, deleniti.`}
        />
        <Stats tagline={`Over 30 years experience.`} />
        <Services
          sectionTitle={`What We Are Best At`}
          sectionMainParagraph={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor dignissimos, inventore at odio asperiores illo dolores cum suscipit? Voluptates, deleniti.`}
          servicesData={ServicesData}
        />
        <Portfolio />
        <Testimonial
          title={`What do clients say about us?`}

          reviewOne={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quaerat voluptas.`}
          nameOne={`Nick Yazdani`}
          positionOne={`Developer`}

          reviewTwo={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quaerat voluptas.`}
          nameTwo={`Jonny James`}
          positionTwo={`Client`}

          reviewThree={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quaerat voluptas.`}
          nameThree={`Lemon Squeeze`}
          positionThree={`Lemonade`}
        />
        <Contact />
      </main>
    </Layout>
  );
};

export default IndexPage;
