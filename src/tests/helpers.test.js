import { isOdd, makeMailLink, makePhoneLink } from '../helpers';

describe('root :: helpers', () => {
  describe('isOdd', () => {
    describe('when called with an odd number', () => {
      it('should return true', () => {
        expect(isOdd(1)).toBe(true);
      });
    });

    describe('when called with an even number', () => {
      it('should return false', () => {
        expect(isOdd(2)).toBe(false);
      });
    });

    describe('when called with something different than a number', () => {
      it('should return false', () => {
        expect(isOdd({ a: 42 })).toBe(false);
        expect(isOdd('string')).toBe(false);
        expect(isOdd(null)).toBe(false);
        expect(isOdd(undefined)).toBe(false);
      });
    });
  });

  describe('makeMailLink', () => {
    const to = 'test@example.com';
    const subject = 'subject';
    const body = 'content of the mail';

    describe('when called with all parameters', () => {
      it('should return a filled mailto link', () => {
        expect(makeMailLink(to, subject, body)).toEqual(
          `mailto:${to}?subject=${subject}&body=${body}`,
        );
      });
    });

    describe('when called with missing parameters', () => {
      it('should return a mailto link without missing parameters', () => {
        expect(makeMailLink(to, undefined, body)).toBe(
          `mailto:${to}?subject=&body=${body}`,
        );
        expect(makeMailLink(to, subject, '')).toBe(
          `mailto:${to}?subject=${subject}&body=`,
        );
        expect(makeMailLink(undefined, subject)).toBe(
          `mailto:?subject=${subject}&body=`,
        );
      });
    });
  });

  describe('makePhoneLink', () => {
    describe('when called with a phone number as parameter', () => {
      const phoneNumber = '+212phoneNumber';

      it('should return a filled tel link', () => {
        expect(makePhoneLink(phoneNumber)).toBe(`tel:${phoneNumber}`);
      });
    });

    describe('when called without phoneNumber', () => {
      it('should return a tel link with an undefined tel value', () => {
        expect(makePhoneLink(undefined)).toBe('tel:undefined');
      });
    });
  });
});
