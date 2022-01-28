import { defineMessages } from 'gatsby-plugin-react-intl';

import { EXPERIENCE_TYPES } from '../../constants';

export default defineMessages({
  [EXPERIENCE_TYPES.education]: {
    id: 'sections/timeline-education',
    defaultMessage: 'Education',
  },
  [EXPERIENCE_TYPES.employee]: {
    id: 'sections/timeline-employee',
    defaultMessage: 'Employee',
  },
  [EXPERIENCE_TYPES.freelance]: {
    id: 'sections/timeline-freelance',
    defaultMessage: 'Freelance',
  },
  selfEducation: {
    id: 'sections/timeline-selfEducation',
    defaultMessage: 'Self Education',
  },
  selfEducationStory: {
    id: 'sections/timeline-selfEducationStory',
    defaultMessage:
      "<p>My journey started in 2010 when I discovered coding. I made my first steps in an 'autodidact' way, learning from scratch my firsts programming languages (C, C++, Python). Very quickly, I loved the fact that I could craft useful software as well as automate painful tasks with just lines of code.</p><p>The WEB is starting to interest me in particular. During this period, I built some fun projects such as bots, web scrapers and web apps.</p>",
  },
  school: {
    id: 'sections/timeline-school',
    defaultMessage: 'School 42',
  },
  schoolStory: {
    id: 'sections/timeline-schoolStory',
    defaultMessage:
      '<p><school>42</school> is <bestSchool>one of the best</bestSchool> engineering and programming college that offers rigorous, industry-leading education in a professional environment. The program is designed to prepare students for the digital world and the technology industry.</p><p>Around <schoolProjects>interesting projects</schoolProjects> 42 allowed me to perfect my <lowLevel>low-level</lowLevel> coding skills and to learn to work within a team.</p>',
  },
  redpelicans: {
    id: 'sections/timeline-redpelicans',
    defaultMessage: 'Redpelicans',
  },
  redpelicansStory: {
    id: 'sections/timeline-redpelicansStory',
    defaultMessage:
      '<p><redpelicans>Redpelicans</redpelicans> is a company based in Paris who offer a full stack Javascript expertise to their clients.</p><p>The first 3 months of my adventure as an employee were an intensive full stack Javascript training period. Followed by my progressive integration in sophisticated Javascript projects, allowing me to have the opportunity to work with developers who have more than 20 years of experience in the field.</p>',
  },
  oecd: {
    id: 'sections/timeline-oecd',
    defaultMessage: 'OECD',
  },
  oecdStory: {
    id: 'sections/timeline-oecdStory',
    defaultMessage:
      '<oecd>The Organization for Economic Co-operation and Development (OECD)</oecd> is an international economic organization. Through an application designed to help the authors of the OECD to publish their books, my mission led me to achieve :<ul><li>An implementation of unit tests including a coverage up to 70%.</li><li>The refactoring of a huge document publication form generating a significant performance gain and a better scalability of the source code.</li><li>The implementation of new features, in particular that of pre-filling the form (files, metadata) according to the profile of the author and the type of the publication.</li></ul>',
  },
  unicef: {
    id: 'sections/timeline-unicef',
    defaultMessage: 'UNICEF',
  },
  unicefStory: {
    id: 'sections/timeline-unicefStory',
    defaultMessage:
      "<p>For my first mission with <unicef>UNICEF</unicef> I had to build a rendering server in the form of a WEB service allowing to transform parts of HTML WEB sections into PDF or PNG.</p><p>Which includes the development of a node.js server hosting the page rendering service via Puppeteer and the implementation of a 'show room' allowing the client to demonstrate the use of the service to the UNICEF project managers.</p>",
  },
  sisCc: {
    id: 'sections/timeline-sisCc',
    defaultMessage: 'SIS-CC',
  },
  sisCcStory: {
    id: 'sections/timeline-sisCcStory',
    defaultMessage:
      'The project was to implement an authentication service in the <sis>SIS-CC</sis> architecture, this mission included :<ul><li>The preliminary study of the Keycloak tool, and the delivery of a model of the solution.</li><li>The implementation of the authorization workflow and the React components to manage the private routes.</li><li>The upgrade of the architecture servers to manage authentication.</li><li>The implementation of examples of private back-end services for third party developers.</li></ul>',
  },
  unicef2: {
    id: 'sections/timeline-unicef2',
    defaultMessage: 'UNICEF 2',
  },
  unicef2Story: {
    id: 'sections/timeline-unicef2Story',
    defaultMessage:
      "In this mission, I implemented new features on the <childMortality>Childmortality</childMortality>'s interface such as the addition of new series of graphics or the implementation of a mobile oriented responsive on some views.",
  },
  europAssistance: {
    id: 'sections/timeline-europAssistance',
    defaultMessage: 'Europ Assistance',
  },
  europAssistanceStory: {
    id: 'sections/timeline-europAssistanceStory',
    defaultMessage:
      'For <ea>Europ Assistance</ea>, I crafted a complete client-side back-office allowing the administrator to manage users permissions.',
  },
  monthDuration: {
    id: 'sections/timeline-monthDuration',
    defaultMessage: '{duration} month',
  },
  monthsDuration: {
    id: 'sections/timeline-monthsDuration',
    defaultMessage: '{duration} months',
  },
  yearDuration: {
    id: 'sections/timeline-yearDuration',
    defaultMessage: '{duration} year',
  },
  yearsDuration: {
    id: 'sections/timeline-yearsDuration',
    defaultMessage: '{duration} years',
  },
  duration: {
    id: 'sections/timeline-duration',
    defaultMessage: 'Duration',
  },
  techs: {
    id: 'sections/timeline-techs',
    defaultMessage: 'Used technologies',
  },
  closeDrawer: {
    id: 'sections/timeline-closeDrawer',
    defaultMessage: 'close',
  },
});
