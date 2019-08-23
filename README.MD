`social-number-de` is a german Social Number ([https://de.wikipedia.org/wiki/Sozialversicherungsnummer](https://de.wikipedia.org/wiki/Sozialversicherungsnummer)) parser and generator for the browser and Node.js.

## Parsing

Use the `.isValid()` to determine Social Number validity.

```javascript
var sin = new SocialNumberDe();
sin.isValid("55347124W504");
// Returns: true

sin = new SocialNumberDe("123456789");
sin.isValid("55347124W502");
// Returns: false
```


## Generating

Use the `.generate([options ])` class method to generate a valid random Social Number.

```javascript
sin.getRandomID()
// Returns a random SIN, e.g. "49973455Z450"
```


inspired by (wealthsimple/social-insurance-number/](https://github.com/wealthsimple/social-insurance-number)) 

