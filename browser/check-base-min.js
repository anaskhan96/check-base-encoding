(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){function removePadding(pattern){return new RegExp(pattern.source.replace(/=/g,''))}
function isBase64(text,noPadding){var pattern=/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/
if(noPadding)
return removePadding(pattern).test(text)
return pattern.test(text)}
function isBase64URL(text,noPadding){var pattern=/^([A-Za-z0-9\-\_]{4})*([A-Za-z0-9\-\_]{4}|[A-Za-z0-9\-\_]{3}=|[A-Za-z0-9\-\_]{2}==)$/
if(noPadding)
return removePadding(pattern).test(text)
return pattern.test(text)}
function isBase58(text){var pattern=/^([1-9A-HJ-NP-Za-km-z])+$/
return pattern.test(text)}
function isBase32(text,noPadding){var pattern=/^([A-Z2-7]{8})*([A-Z2-7]{8}|[A-Z2-7]{7}=|[A-Z2-7]{5}===|[A-Z2-7]{4}====|[A-Z2-7]{2}======)$/
if(noPadding)
return removePadding(pattern).test(text)
return pattern.test(text)}
function isBase32Hex(text,noPadding){var pattern=/^([A-V0-9]{8})*([A-V0-9]{8}|[A-V0-9]{7}=|[A-V0-9]{5}===|[A-V0-9]{4}====|[A-V0-9]{2}======)$/
if(noPadding)
return removePadding(pattern).test(text)
return pattern.test(text)}
function isHex(text){var pattern=/^([A-F0-9]{2})+$/i
return pattern.test(text)}
module.exports={isBase64,isBase64URL,isBase58,isBase32,isBase32Hex,isHex}},{}]},{},[1])