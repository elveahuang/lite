import { IdEntity } from '@/commons/entity/id.entity';
import { SequenceService } from '@/commons/service/sequence.service';
import { DataSource, EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
export declare class EntitySubscriber implements EntitySubscriberInterface {
    protected readonly dataSource: DataSource;
    protected readonly sequenceService: SequenceService;
    constructor(dataSource: DataSource, sequenceService: SequenceService);
    beforeInsert(event: InsertEvent<IdEntity>): void;
    beforeUpdate(event: UpdateEvent<IdEntity>): void;
}
