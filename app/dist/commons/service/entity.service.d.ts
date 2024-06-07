import { DataSource } from 'typeorm';
import { EntityTarget } from 'typeorm/common/EntityTarget';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';
import { Repository } from 'typeorm/repository/Repository';
export declare class EntityService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    getRepository<Entity extends ObjectLiteral>(entityClass: EntityTarget<Entity>): Repository<Entity>;
}
