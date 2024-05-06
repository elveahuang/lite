"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampTransformer = void 0;
const dayjs_1 = require("dayjs");
class TimestampTransformer {
    format;
    constructor(format = 'YYYY-MM-DD HH:mm:ss') {
        this.format = format;
    }
    to(value) {
        return value;
    }
    from(value) {
        return (0, dayjs_1.default)(value).format(this.format);
    }
}
exports.TimestampTransformer = TimestampTransformer;
//# sourceMappingURL=timestamp.transformer.js.map