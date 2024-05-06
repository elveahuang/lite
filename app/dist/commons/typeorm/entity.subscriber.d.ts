import { IdEntity } from '@/commons/entity/id.entity';
import { SequenceService } from '@/commons/service/sequence.service';
import { DataSource, EntitySubscriberInterface, InsertEvent } from 'typeorm';
export declare class EntitySubscriber implements EntitySubscriberInterface {
    private readonly dataSource;
    private readonly sequenceService;
    constructor(dataSource: DataSource, sequenceService: SequenceService);
    beforeInsert(event: InsertEvent<IdEntity>): void;
}
