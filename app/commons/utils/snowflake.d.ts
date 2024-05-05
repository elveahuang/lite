export declare type SnowflakeOptions = {
    epoch?: bigint;
    workerId?: number;
    datacenterId?: number;
};
export declare class Snowflake {
    epoch: bigint;
    workerId: number;
    datacenterId: number;
    workerIdBits: number;
    maxWorkerId: number;
    datacenterIdBits: number;
    maxDatacenterId: number;
    sequenceBits: number;
    maxSequence: number;
    workerIdLeftShift: number;
    datacenterIdLeftShift: number;
    timestampLeftShift: number;
    sequence: number;
    lastTimestamp: bigint;
    constructor(options: SnowflakeOptions);
    nextId(): bigint;
    tilNextMillis(lastTimestamp: bigint): bigint;
    currentTimestamp(): bigint;
}
