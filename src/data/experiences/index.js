import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-react-intl';

import Link from '../../components/Link';

import { EXPERIENCE_TYPES, SKILLS } from '../../constants';

import messages from './messages';

export default [
  {
    title: <FormattedMessage {...messages.selfEducation} />,
    story: (
      <FormattedMessage
        {...messages.selfEducationStory}
        values={{
          p: (chunks) => <p>{chunks}</p>,
        }}
      />
    ),
    techs: [SKILLS.c, SKILLS.cpp, SKILLS.python, SKILLS.js],
    date: 2010,
    type: EXPERIENCE_TYPES.education,
  },
  {
    title: <FormattedMessage {...messages.school} />,
    story: (
      <FormattedMessage
        {...messages.schoolStory}
        values={{
          school: (chunks) => (
            <Link
              to="https://42.fr/en/what-is-42/the-42-method/"
              target="_blank"
              rel="noopener"
            >
              {chunks}
            </Link>
          ),
          bestSchool: (chunks) => (
            <Link
              to="https://www.codingame.com/blog/which-students-are-really-the-best-developers-in-the-world/"
              target="_blank"
              rel="noopener"
            >
              {chunks}
            </Link>
          ),
          schoolProjects: (chunks) => (
            <Link to="github school projects" target="_blank" rel="noopener">
              {chunks}
            </Link>
          ),
          lowLevel: (chunks) => (
            <Link
              to="https://en.wikipedia.org/wiki/Low-level_programming_language"
              target="_blank"
              rel="noopener"
            >
              {chunks}
            </Link>
          ),
          p: (chunks) => <p>{chunks}</p>,
        }}
      />
    ),
    techs: [SKILLS.c],
    date: 2016,
    duration: (
      <FormattedMessage {...messages.yearsDuration} values={{ duration: 3 }} />
    ),
    type: EXPERIENCE_TYPES.education,
  },
  {
    title: <FormattedMessage {...messages.redpelicans} />,
    story: (
      <FormattedMessage
        {...messages.redpelicansStory}
        values={{
          redpelicans: (chunks) => (
            <Link
              to="https://www.redpelicans.com"
              target="_blank"
              rel="noopener"
            >
              {chunks}
            </Link>
          ),
          p: (chunks) => <p>{chunks}</p>,
        }}
      />
    ),
    techs: [
      SKILLS.react,
      SKILLS.redux,
      SKILLS.mui,
      SKILLS.node,
      SKILLS.express,
      SKILLS.mongo,
      SKILLS.webpack,
      SKILLS.jest,
      SKILLS.d3,
    ],
    date: 2019,
    duration: (
      <FormattedMessage {...messages.yearDuration} values={{ duration: 1 }} />
    ),
    type: EXPERIENCE_TYPES.employee,
  },
  {
    title: <FormattedMessage {...messages.oecd} />,
    story: (
      <FormattedMessage
        {...messages.oecdStory}
        values={{
          oecd: (chunks) => (
            <Link to="https://www.oecd.org/" target="_blank" rel="noopener">
              {chunks}
            </Link>
          ),
          ul: (chunks) => <ul>{chunks}</ul>,
          li: (chunks) => <li>{chunks}</li>,
        }}
      />
    ),
    techs: [SKILLS.react, SKILLS.rff, SKILLS.jest],
    date: 2020,
    duration: (
      <FormattedMessage {...messages.monthsDuration} values={{ duration: 2 }} />
    ),
    type: EXPERIENCE_TYPES.freelance,
  },
  {
    title: <FormattedMessage {...messages.unicef} />,
    story: (
      <FormattedMessage
        {...messages.unicefStory}
        values={{
          unicef: (chunks) => (
            <Link to="https://www.unicef.fr/" target="_blank" rel="noopener">
              {chunks}
            </Link>
          ),
          p: (chunks) => <p>{chunks}</p>,
        }}
      />
    ),
    techs: [SKILLS.react, SKILLS.node, SKILLS.express, SKILLS.puppeteer],
    date: 2020,
    duration: (
      <FormattedMessage {...messages.monthsDuration} values={{ duration: 4 }} />
    ),
    type: EXPERIENCE_TYPES.freelance,
  },
  {
    title: <FormattedMessage {...messages.sisCc} />,
    story: (
      <FormattedMessage
        {...messages.sisCcStory}
        values={{
          sis: (chunks) => (
            <Link to="https://siscc.org/" target="_blank" rel="noopener">
              {chunks}
            </Link>
          ),
          ul: (chunks) => <ul>{chunks}</ul>,
          li: (chunks) => <li>{chunks}</li>,
        }}
      />
    ),
    techs: [
      SKILLS.react,
      SKILLS.node,
      SKILLS.express,
      SKILLS.keycloak,
      SKILLS.docker,
      SKILLS.jwt,
    ],
    date: 2020,
    duration: (
      <FormattedMessage {...messages.monthsDuration} values={{ duration: 3 }} />
    ),
    type: EXPERIENCE_TYPES.freelance,
  },
  {
    title: <FormattedMessage {...messages.unicef2} />,
    story: (
      <FormattedMessage
        {...messages.unicef2Story}
        values={{
          childMortality: (chunks) => (
            <Link
              to="https://childmortality.org"
              target="_blank"
              rel="noopener"
            >
              {chunks}
            </Link>
          ),
        }}
      />
    ),
    techs: [SKILLS.react, SKILLS.mui, SKILLS.d3],
    date: 2021,
    duration: (
      <FormattedMessage {...messages.monthsDuration} values={{ duration: 2 }} />
    ),
    type: EXPERIENCE_TYPES.freelance,
  },
  {
    title: <FormattedMessage {...messages.europAssistance} />,
    story: (
      <FormattedMessage
        {...messages.europAssistanceStory}
        values={{
          ea: (chunks) => (
            <Link
              to="https://www.europ-assistance.fr"
              target="_blank"
              rel="noopener"
            >
              {chunks}
            </Link>
          ),
        }}
      />
    ),
    techs: [SKILLS.react, SKILLS.redux, SKILLS.rff, SKILLS.jest],
    date: 2021,
    duration: (
      <FormattedMessage {...messages.monthsDuration} values={{ duration: 6 }} />
    ),
    type: EXPERIENCE_TYPES.freelance,
  },
];
