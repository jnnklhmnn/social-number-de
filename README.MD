[![Maintainability](https://api.codeclimate.com/v1/badges/ccbde15d6457dcf08be2/maintainability)](https://codeclimate.com/github/jnnkm/social-number-de/maintainability)

[![CircleCI](https://circleci.com/gh/jnnkm/social-number-de/tree/master.svg?style=svg)](https://circleci.com/gh/jnnkm/social-number-de/tree/master) [![Greenkeeper badge](https://badges.greenkeeper.io/jnnkm/social-number-de.svg)](https://greenkeeper.io/)

  

## What is this?

  

`social-number-de` is a german Social Number ([https://de.wikipedia.org/wiki/Sozialversicherungsnummer](https://de.wikipedia.org/wiki/Sozialversicherungsnummer)) parser and generator for the Browser and Node.js.

  

## Installation

  

`npm install social-number-de`

  

## Introduce Class

  

```javascript

import { SocialNumberDe } from  'social-number-de';

  

const  sin  =  new  SocialNumberDe();

```

  

## Parsing

  

Use the `.isValid()` to determine Social Number validity.

  

```javascript

import { SocialNumberDe } from  'social-number-de';

  

const  sin  =  new  SocialNumberDe();

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

Supported by

![Browserstack](https://p14.zdusercontent.com/attachment/1015988/1NoVEeqUSIpU4tzuRbqhGz0AS =250x)