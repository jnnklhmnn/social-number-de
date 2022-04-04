(function (global) {

  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  var SocialNumberDe = function () {

  };

  SocialNumberDe.prototype.isValid = function (sn) {
    if (typeof sn !== 'string') return false;
    if (!sn || sn.length !== 12) return false;
    const snArr = sn.split('');
    const char = getPositionInAlphabet(sn[8]);
    const arrEnd = [...snArr.slice(9, 11)];
    const arrStart = [...snArr.slice(0, 8)];
    const checkSumInput = parseInt(snArr.slice(11, 12));
    const weigthingArr = [2, 1, 2, 5, 7, 1, 2, 1, 2, 1, 2, 1];
    let snEncoded = [...arrStart, ...char, ...arrEnd];
    let weightedArr = [];

    snEncoded.map((item, i) => {
      weightedArr.push(parseInt(item) * weigthingArr[i]);
    });

    return calcCheckSum(calcCrossSumm(parseInt(weightedArr.toString().replace(/,/g, '')))) === checkSumInput
  };

  SocialNumberDe.prototype.getRandomID = function () {
    const randomCheckSum = getRandomInt(0, 9);
    const randomChar = getRandomCharFromAlphabet().toUpperCase();
    let generatedID = createRandomID(randomCheckSum, randomChar);

    while (this.isValid(generatedID) === false) {
      generatedID = createRandomID(randomCheckSum, randomChar);
    }
    return generatedID;
  };


  const calcCheckSum = (num) => {
    return num >= 10 ? num = num - Math.floor(num / 10) * 10 : num;
  }

  const calcCrossSumm = (num) => {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  const getPositionInAlphabet = (query) => {
    return (ALPHABET.indexOf(query.toLowerCase(), 0) + 1).toString().split('');
  }

  const getRandomCharFromAlphabet = () => {
    return ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const createRandomID = (checkSum, char) => {
    let newID = [];
    while (newID.length < 8) {
      newID.push(getRandomInt(0, 9));
    }
    newID.push(char);

    while (newID.length < 11) {
      newID.push(getRandomInt(0, 9));
    }
    newID.push(checkSum);
    return newID.toString().replace(/,/g, '');

  }


  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = SocialNumberDe;
    }
    exports.SocialNumberDe = SocialNumberDe;
  }
  else {
    global.SocialNumberDe = SocialNumberDe;
  }

})(this);
