var { SocialNumberDe } = require('../social-number-de');
describe('SocialNumberDe', function () {
  describe("when checking for validity", function () {
    it("should return true on valid input", function () {
      var sn = new SocialNumberDe;
      expect(sn.isValid("65180539W001")).toEqual(true);
    });
    it("should return false on invalid input", function () {
      expect(new SocialNumberDe().isValid("65180539W002")).toEqual(false);
      expect(new SocialNumberDe().isValid("75180539W001")).toEqual(false);
    });
    it("should return false on invalid input type", function () {
      let invalidInputs = [{}, null, undefined, true, false, () => { }, 9, []];
      invalidInputs.map((invalidInput) => {
        expect(new SocialNumberDe().isValid(invalidInput)).toEqual(false);
      });
    });
  });

  describe("when creating a randomID", function () {
    it("should return a valid ID", function () {
      let sin = new SocialNumberDe;
      let createdID = sin.getRandomID();
      expect(sin.isValid(createdID)).toEqual(true);
    });
  });
});
