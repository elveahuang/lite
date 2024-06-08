"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = exports.Page = exports.R = void 0;
class R {
    code;
    message;
    data;
}
exports.R = R;
class Page {
    content;
    total;
    page;
    limit;
}
exports.Page = Page;
class Pagination {
    page = 1;
    limit = 12;
    q = '';
}
exports.Pagination = Pagination;
//# sourceMappingURL=index.js.map