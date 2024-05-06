import { Snowflake } from '@/commons/utils/snowflake';
export declare class SequenceService {
    sequence: Snowflake;
    constructor();
    nextId(): bigint;
}
