(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.checkBase=f()}})(function(){var define,module,exports;return(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){'use strict';function removePadding(pattern){return new RegExp(pattern.source.replace(/=/g,''))}
function isBase64(text,noPadding){var pattern=/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;if(noPadding)
return removePadding(pattern).test(text);return pattern.test(text)}
function isBase64URL(text,noPadding){var pattern=/^([A-Za-z0-9\-\_]{4})*([A-Za-z0-9\-\_]{4}|[A-Za-z0-9\-\_]{3}=|[A-Za-z0-9\-\_]{2}==)$/;if(noPadding)
return removePadding(pattern).test(text);return pattern.test(text)}
function isBase32(text,noPadding){var pattern=/^([A-Z2-7]{8})*([A-Z2-7]{8}|[A-Z2-7]{7}=|[A-Z2-7]{5}===|[A-Z2-7]{4}====|[A-Z2-7]{2}======)$/;if(noPadding)
return removePadding(pattern).test(text);return pattern.test(text)}
function isBase32Hex(text,noPadding){var pattern=/^([A-V0-9]{8})*([A-V0-9]{8}|[A-V0-9]{7}=|[A-V0-9]{5}===|[A-V0-9]{4}====|[A-V0-9]{2}======)$/;if(noPadding)
return removePadding(pattern).test(text);return pattern.test(text)}
function isHex(text){var pattern=/^([A-F0-9]{2})+$/i;return pattern.test(text)}
function detect(text){if(isHex(text))
return 'hex';if(isBase32(text)||isBase32(text,!0))
return 'base32';if(isBase32Hex(text)||isBase32Hex(text,!0))
return 'base32hex';if(isBase64(text)||isBase64(text,!0))
return 'base64';if(isBase64URL(text)||isBase64URL(text,!0))
return 'base64url';return 'invalid base encoding'}
module.exports={isBase64,isBase64URL,isBase32,isBase32Hex,isHex,detect}},{}]},{},[1])(1)})