# check-base-encoding
[![Build Status](https://travis-ci.org/anaskhan96/check-base-encoding.svg?branch=master)](https://travis-ci.org/anaskhan96/check-base-encoding)
[![npm version](https://badge.fury.io/js/check-base-encoding.svg)](https://badge.fury.io/js/check-base-encoding)

npm module to check and verify base encoding of a particular string according to the [RFC4648](https://tools.ietf.org/html/rfc4648) spec.

### Installation

```bash
npm install --save check-base-encoding
```

### Usage

```javascript
var checkBase = require('check-base-encoding');

// Following examples yield true as the output
console.log(checkBase.isBase64('SGV5IG1hbiB3aGF0J3MgdQ=='));

console.log(checkBase.isBase64URL('WW8geW8gY2hlY2s='));

console.log(checkBase.isBase32('JBSXSIDNMFXCYIDX'));

console.log(checkBase.isBase32Hex('ETK68TBHCHI68==='));

console.log(checkBase.isHex('736E646964'));

// If your string is not padded (in the case of first four functions),
// you need to pass a second argument `true` which enforces no padding

// Following is the example of a VAPID key
console.log(checkBase.isBase64URL('InhF137RBd4GPsDxlIoO6P_aCRaO9WspxraTJwiqjxY', true));
// --> true

// `detect` finds the base encoding of a string
console.log(checkBase.detect('91INI83DC5N20Q90CC======'));
// --> 'base32hex'
```