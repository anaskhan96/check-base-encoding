'use strict';

function isBase64(text, noPadding) {
    var pattern = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
    noPadding = noPadding || false;
    if (noPadding) {
        var patternStr = pattern.source.replace(/=/g, '');
        pattern = new RegExp(patternStr);
        return pattern.test(text);
    }
    return pattern.test(text);
}

function isBase64URL(text, noPadding) {
    var pattern = /^([A-Za-z0-9\-\_]{4})*([A-Za-z0-9\-\_]{4}|[A-Za-z0-9\-\_]{3}=|[A-Za-z0-9\-\_]{2}==)$/;
    noPadding = noPadding || false;
    if (noPadding) {
        var patternStr = pattern.source.replace(/=/g, '');
        pattern = new RegExp(patternStr);
        return pattern.test(text);
    }
    return pattern.test(text);
}
