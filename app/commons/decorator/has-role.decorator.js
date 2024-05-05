"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasRole = void 0;
const common_1 = require("@nestjs/common");
const HasRole = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.HasRole = HasRole;
//# sourceMappingURL=has-role.decorator.js.map