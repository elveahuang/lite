import { EntityManager } from 'typeorm';
export declare class CoreService {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    getRepository<T>(c: {
        new (): T;
    }): T;
    getDate(): Date;
}
