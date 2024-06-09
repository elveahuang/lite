"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPagination = exports.Pagination = exports.Page = exports.R = void 0;
class R {
    code;
    message;
    data;
}
exports.R = R;
class Page {
    content;
    totalElements;
    pageable;
}
exports.Page = Page;
class Pagination {
    page = 1;
    size = 12;
    q = '';
}
exports.Pagination = Pagination;
exports.defaultPagination = {
    page: 1,
    size: 12,
};
//# sourceMappingURL=index.js.map