export declare class R<T = any> {
    code: number | string;
    message: string;
    data: T;
}
export declare class Page<T> {
    content: T[];
    total: number;
    page: number;
    limit: number;
}
export declare class Pagination {
    readonly page: number;
    readonly limit?: number;
    readonly q?: string;
}
