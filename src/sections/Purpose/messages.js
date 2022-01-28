import { defineMessages } from 'gatsby-plugin-react-intl';

export default defineMessages({
  title: {
    id: 'sections/purpose-title',
    defaultMessage: "Hi, I'm Florian, this is my interactive resume",
  },
  story: {
    id: 'sections/purpose-story',
    defaultMessage:
      "<story1>I'm a French Software Engineer based in Paris. For more than five years, I have a passion for writing beautiful code and crafting <timeline>robust and functional web products</timeline> using <skills>wonderful technologies</skills>.</story1><story2>As an agile developer my main goal is to deliver the expected products on time and to make my work transparent. You like my work and want to talk to me ? Hit me up on my <email>email</email> or simply <phone>call me</phone> !</story2>",
  },
});
