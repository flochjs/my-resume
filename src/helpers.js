import { map, addIndex } from 'ramda';

export const mapIndexed = addIndex(map);

export const isOdd = (n) => Boolean(n % 2);

export const makeMailLink = (to = '', subject = '', body = '') =>
  `mailto:${to}?subject=${subject}&body=${body}`;

export const makePhoneLink = (phoneNumber) => `tel:${phoneNumber}`;
