import CLogo from '../../images/c-logo.svg';
import CppLogo from '../../images/cpp-logo.svg';
import PythonLogo from '../../images/python-logo.svg';
import JsLogo from '../../images/js-logo.svg';
import ReactLogo from '../../images/react-logo.svg';
import ReduxLogo from '../../images/redux-logo.svg';
import MuiLogo from '../../images/mui-logo.svg';
import NodeLogo from '../../images/node-logo.svg';
import ExpressLogo from '../../images/express-logo.svg';
import MongoLogo from '../../images/mongo-logo.svg';
import WebpackLogo from '../../images/webpack-logo.svg';
import JestLogo from '../../images/jest-logo.svg';
import D3Logo from '../../images/d3-logo.svg';
import RffLogo from '../../images/rff-logo.svg';
import PuppeteerLogo from '../../images/puppeteer-logo.svg';
import KeycloakLogo from '../../images/keycloak-logo.svg';
import DockerLogo from '../../images/docker-logo.svg';
import Jwtlogo from '../../images/jwt-logo.svg';
import AlgoliaLogo from '../../images/algolia-logo.svg';
import HTMLLogo from '../../images/html-logo.svg';
import CSSLogo from '../../images/css-logo.svg';
import TsLogo from '../../images/typescript-logo.svg';
import ReactRouterLogo from '../../images/react-router-logo.svg';
import ReactIntlLogo from '../../images/react-intl-logo.svg';
import BootstrapLogo from '../../images/bootstrap-logo.svg';
import StyledCompLogo from '../../images/styled-comp-logo.svg';
import JSSLogo from '../../images/jss-logo.svg';
import SassLogo from '../../images/sass-logo.svg';
import CRALogo from '../../images/cra-logo.svg';
import GatsbyLogo from '../../images/gatsby-logo.svg';
import NextLogo from '../../images/next-logo.svg';
import GulpLogo from '../../images/gulp-logo.svg';
import GruntLogo from '../../images/grunt-logo.svg';
import JenkinsLogo from '../../images/jenkins-logo.svg';
import GraphQLLogo from '../../images/graphql-logo.svg';
import RamdaLogo from '../../images/ramda-logo.svg';
import LodashLogo from '../../images/lodash-logo.svg';
import GitLogo from '../../images/git-logo.svg';
import VimLogo from '../../images/vim-logo.svg';
import UnixLogo from '../../images/unix-logo.svg';
import FrenchFlag from '../../images/french-flag.svg';
import EnglishFlag from '../../images/english-flag.svg';
import ItalianFlag from '../../images/italian-flag.svg';

import { SKILLS, SKILL_TYPES } from '../../constants';

export default {
  [SKILLS.fr]: {
    type: SKILL_TYPES.language,
    label: 'French',
    value: 5,
    logo: FrenchFlag,
  },
  [SKILLS.en]: {
    type: SKILL_TYPES.language,
    label: 'English',
    value: 4,
    logo: EnglishFlag,
  },
  [SKILLS.it]: {
    type: SKILL_TYPES.language,
    label: 'Italian',
    value: 1,
    logo: ItalianFlag,
  },
  [SKILLS.html]: {
    type: SKILL_TYPES.front,
    label: 'HTML',
    value: 4,
    logo: HTMLLogo,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  [SKILLS.css]: {
    type: SKILL_TYPES.front,
    label: 'CSS',
    value: 4,
    logo: CSSLogo,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  [SKILLS.js]: {
    type: SKILL_TYPES.front,
    label: 'Javascript',
    value: 4,
    logo: JsLogo,
    link: 'https://en.wikipedia.org/wiki/JavaScript',
  },
  [SKILLS.typescript]: {
    type: SKILL_TYPES.front,
    label: 'Typescript',
    value: 4,
    logo: TsLogo,
    link: 'https://www.typescriptlang.org',
  },
  [SKILLS.react]: {
    type: SKILL_TYPES.front,
    label: 'React',
    value: 4,
    logo: ReactLogo,
    link: 'https://reactjs.org',
  },
  [SKILLS.redux]: {
    type: SKILL_TYPES.front,
    label: 'Redux',
    value: 5,
    logo: ReduxLogo,
    link: 'https://redux.js.org',
  },
  [SKILLS.mui]: {
    type: SKILL_TYPES.front,
    label: 'Material UI',
    value: 4,
    logo: MuiLogo,
    link: 'https://mui.com',
  },
  [SKILLS.bootstrap]: {
    type: SKILL_TYPES.front,
    label: 'Bootstrap',
    value: 3,
    logo: BootstrapLogo,
    link: 'https://getbootstrap.com',
  },
  [SKILLS.styledComp]: {
    type: SKILL_TYPES.front,
    label: 'Styled Components',
    value: 3,
    logo: StyledCompLogo,
    link: 'https://styled-components.com',
  },
  [SKILLS.jss]: {
    type: SKILL_TYPES.front,
    label: 'JSS',
    value: 3,
    logo: JSSLogo,
    link: 'https://cssinjs.org',
  },
  [SKILLS.sass]: {
    type: SKILL_TYPES.front,
    label: 'Sass',
    value: 2,
    logo: SassLogo,
    link: 'https://sass-lang.com',
  },
  [SKILLS.node]: {
    type: SKILL_TYPES.back,
    label: 'Node.js',
    value: 3,
    logo: NodeLogo,
    link: 'https://nodejs.org',
  },
  [SKILLS.express]: {
    type: SKILL_TYPES.back,
    label: 'Express.js',
    value: 3,
    logo: ExpressLogo,
    link: 'https://expressjs.com',
  },
  [SKILLS.mongo]: {
    type: SKILL_TYPES.back,
    label: 'Mongo DB',
    value: 2,
    logo: MongoLogo,
    link: 'https://www.mongodb.com',
  },
  [SKILLS.jwt]: {
    type: SKILL_TYPES.back,
    label: 'JSON Web Token',
    value: 4,
    logo: Jwtlogo,
    link: 'https://jwt.io',
  },
  [SKILLS.keycloak]: {
    type: SKILL_TYPES.back,
    label: 'Keycloak',
    value: 3,
    logo: KeycloakLogo,
    link: 'https://www.keycloak.org',
  },
  [SKILLS.puppeteer]: {
    type: SKILL_TYPES.back,
    label: 'Puppeteer',
    value: 3,
    logo: PuppeteerLogo,
    link: 'https://developers.google.com/web/tools/puppeteer',
  },
  [SKILLS.algolia]: {
    type: SKILL_TYPES.back,
    label: 'Algolia',
    value: 3,
    logo: AlgoliaLogo,
    link: 'https://www.algolia.com',
  },
  [SKILLS.docker]: {
    type: SKILL_TYPES.back,
    label: 'Docker',
    value: 2,
    logo: DockerLogo,
    link: 'https://www.docker.com',
  },
  [SKILLS.jenkins]: {
    type: SKILL_TYPES.back,
    label: 'Jenkins',
    value: 2,
    logo: JenkinsLogo,
    link: 'https://www.jenkins.io',
  },
  [SKILLS.graphql]: {
    type: SKILL_TYPES.others,
    label: 'GraphQL',
    value: 4,
    logo: GraphQLLogo,
    link: 'https://graphql.org',
  },
  [SKILLS.ramda]: {
    type: SKILL_TYPES.others,
    label: 'Ramda',
    value: 4,
    logo: RamdaLogo,
    link: 'https://ramdajs.com',
  },
  [SKILLS.lodash]: {
    type: SKILL_TYPES.others,
    label: 'Lodash',
    value: 3,
    logo: LodashLogo,
    link: 'https://lodash.com',
  },
  [SKILLS.jest]: {
    type: SKILL_TYPES.others,
    label: 'Jest',
    value: 4,
    logo: JestLogo,
    link: 'https://jestjs.io',
  },
  [SKILLS.cra]: {
    type: SKILL_TYPES.others,
    label: 'Create React App',
    value: 4,
    logo: CRALogo,
    link: 'https://create-react-app.dev',
  },
  [SKILLS.gatsby]: {
    type: SKILL_TYPES.others,
    label: 'Gatsby',
    value: 4,
    logo: GatsbyLogo,
    link: 'https://www.gatsbyjs.com',
  },
  [SKILLS.next]: {
    type: SKILL_TYPES.others,
    label: 'Next.js',
    value: 3,
    logo: NextLogo,
    link: 'https://cssinjs.org',
  },
  [SKILLS.webpack]: {
    type: SKILL_TYPES.others,
    label: 'Webpack',
    value: 3,
    logo: WebpackLogo,
    link: 'https://webpack.js.org',
  },
  [SKILLS.gulp]: {
    type: SKILL_TYPES.others,
    label: 'Gulp',
    value: 3,
    logo: GulpLogo,
    link: 'https://gulpjs.com',
  },
  [SKILLS.grunt]: {
    type: SKILL_TYPES.others,
    label: 'Grunt',
    value: 3,
    logo: GruntLogo,
    link: 'https://gruntjs.com',
  },
  [SKILLS.unix]: {
    type: SKILL_TYPES.tools,
    label: 'Unix',
    value: 4,
    logo: UnixLogo,
    link: 'https://en.wikipedia.org/wiki/Unix',
  },
  [SKILLS.git]: {
    type: SKILL_TYPES.tools,
    label: 'Git',
    value: 4,
    logo: GitLogo,
    link: 'https://git-scm.com',
  },
  [SKILLS.vim]: {
    type: SKILL_TYPES.tools,
    label: 'Vim',
    value: 4,
    logo: VimLogo,
    link: 'https://en.wikipedia.org/wiki/Vim_(text_editor)',
  },

  [SKILLS.c]: {
    label: 'C',
    logo: CLogo,
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
  },
  [SKILLS.cpp]: {
    label: 'C++',
    logo: CppLogo,
    link: 'https://en.wikipedia.org/wiki/C%2B%2B',
  },
  [SKILLS.python]: {
    label: 'Python',
    logo: PythonLogo,
    link: 'https://www.python.org',
  },
  [SKILLS.d3]: { label: 'D3.js', logo: D3Logo, link: 'https://d3js.org' },
  [SKILLS.rff]: {
    label: 'React Final Form',
    logo: RffLogo,
    link: 'https://final-form.org/react',
  },
  [SKILLS.reactRouter]: {
    label: 'React Router',
    logo: ReactRouterLogo,
    link: 'https://reactrouter.com',
  },
  [SKILLS.reactIntl]: {
    label: 'React Intl',
    logo: ReactIntlLogo,
    link: 'https://formatjs.io/docs/react-intl/',
  },
};
