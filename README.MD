## What is this?

`social-number-de` is a german Social Number ([https://de.wikipedia.org/wiki/Sozialversicherungsnummer](https://de.wikipedia.org/wiki/Sozialversicherungsnummer)) parser and generator for the Browser and Node.js.

## Installation

`npm install social-number-de`

## Parsing

Use the `.isValid()` to determine Social Number validity.

```javascript
import { SocialNumberDe } from 'social-number-de';

const sin = new SocialNumberDe();
sin.isValid("55347124W504");
// Returns: true

sin.isValid("55347124W502");
// Returns: false
```


## Generating

Use the `.getRandomID()` class method to generate a valid random Social Number.

```javascript
sin.getRandomID()
// Returns a random SIN, e.g. "49973455Z450"
```


inspired by [wealthsimple/social-insurance-number](https://github.com/wealthsimple/social-insurance-number)
