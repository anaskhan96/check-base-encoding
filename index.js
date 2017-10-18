'use strict'

function removePadding (pattern) {
  return new RegExp(pattern.source.replace(/=/g, ''))
}

function isBase64 (text, noPadding) {
  var pattern = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/
  if (noPadding)
    return removePadding(pattern).test(text)
  return pattern.test(text)
}

function isBase64URL (text, noPadding) {
  var pattern = /^([A-Za-z0-9\-\_]{4})*([A-Za-z0-9\-\_]{4}|[A-Za-z0-9\-\_]{3}=|[A-Za-z0-9\-\_]{2}==)$/
  if (noPadding)
    return removePadding(pattern).test(text)
  return pattern.test(text)
}

function isBase32 (text, noPadding) {
  var pattern = /^([A-Z2-7]{8})*([A-Z2-7]{8}|[A-Z2-7]{7}=|[A-Z2-7]{5}===|[A-Z2-7]{4}====|[A-Z2-7]{2}======)$/
  if (noPadding)
    return removePadding(pattern).test(text)
  return pattern.test(text)
}

function isBase32Hex (text, noPadding) {
  var pattern = /^([A-V0-9]{8})*([A-V0-9]{8}|[A-V0-9]{7}=|[A-V0-9]{5}===|[A-V0-9]{4}====|[A-V0-9]{2}======)$/
  if (noPadding)
    return removePadding(pattern).test(text)
  return pattern.test(text)
}

function isHex (text) {
  var pattern = /^([A-F0-9]{2})+$/i
  return pattern.test(text)
}

function detect (text) {
  if (isHex(text))
    return 'hex'
  if (isBase32(text) || isBase32(text, true))
    return 'base32'
  if (isBase32Hex(text) || isBase32Hex(text, true))
    return 'base32hex'
  if (isBase64(text) || isBase64(text, true))
    return 'base64'
  if (isBase64URL(text) || isBase64URL(text, true))
    return 'base64url'
  return 'invalid base encoding'
}

module.exports = {
  isBase64,
  isBase64URL,
  isBase32,
  isBase32Hex,
  isHex,
detect}
