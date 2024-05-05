export declare class IdEntity {
    id: bigint;
    createdAt: Date;
    lastModifiedAt: Date;
    onBeforeInsert(): void;
    onBeforeUpdate(): void;
}
