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

function isBase32(text, noPadding) {
    var pattern = /^([A-Z2-7]{8})*([A-Z2-7]{8}|[A-Z2-7]{7}=|[A-Z2-7]{5}===|[A-Z2-7]{4}====|[A-Z2-7]{2}======)$/;
    noPadding = noPadding || false;
    if (noPadding) {
        var patternStr = pattern.source.replace(/=/g, '');
        pattern = new RegExp(patternStr);
        return pattern.test(text);
    }
    return pattern.test(text);
}

function isBase32Hex(text, noPadding) {
    var pattern = /^([A-V0-9]{8})*([A-V0-9]{8}|[A-V0-9]{7}=|[A-V0-9]{5}===|[A-V0-9]{4}====|[A-V0-9]{2}======)$/;
    noPadding = noPadding || false;
    if (noPadding) {
        var patternStr = pattern.source.replace(/=/g, '');
        pattern = new RegExp(patternStr);
        return pattern.test(text);
    }
    return pattern.test(text);
}

function isBase16(text) {
    var pattern = /^([A-F0-9]{2})+$/;
    return pattern.test(text);
}
