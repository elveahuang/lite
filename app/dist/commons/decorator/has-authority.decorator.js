"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasAuthority = void 0;
const common_1 = require("@nestjs/common");
const HasAuthority = (...authorities) => (0, common_1.SetMetadata)('authorities', authorities);
exports.HasAuthority = HasAuthority;
//# sourceMappingURL=has-authority.decorator.js.map