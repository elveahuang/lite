export declare class R<T = any> {
    code: number | string;
    message: string;
    data: T;
}
export declare class Page<T> {
    content: T[];
    totalElements?: number | string;
    pageable?: {
        pageNumber?: number;
        pageSize?: number;
    };
}
export declare class Pagination {
    readonly page?: number;
    readonly size?: number;
    readonly q?: string;
}
export declare const defaultPagination: Pagination;
