"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const addon = require('./load.cjs');
function hello() {
    return addon.hello();
}
exports.hello = hello;
