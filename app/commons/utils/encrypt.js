"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = exports.compare = void 0;
const bcrypt_1 = require("bcrypt");
const compare = async (old, repeat) => {
    return (0, bcrypt_1.compareSync)(old, repeat);
};
exports.compare = compare;
const encrypt = (password) => {
    return (0, bcrypt_1.hashSync)(password, 10);
};
exports.encrypt = encrypt;
//# sourceMappingURL=encrypt.js.map