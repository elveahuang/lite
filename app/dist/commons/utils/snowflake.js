"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snowflake = void 0;
class Snowflake {
    epoch = BigInt(1672502400000);
    workerId = 1;
    datacenterId = 1;
    workerIdBits = 5;
    maxWorkerId = ~(-1 << this.workerIdBits);
    datacenterIdBits = 5;
    maxDatacenterId = ~(-1 << this.datacenterIdBits);
    sequenceBits = 12;
    maxSequence = ~(-1 << this.sequenceBits);
    workerIdLeftShift = this.sequenceBits;
    datacenterIdLeftShift = this.sequenceBits + this.workerIdBits;
    timestampLeftShift = this.sequenceBits + this.workerIdBits + this.datacenterIdBits;
    sequence = 0;
    lastTimestamp = BigInt(0);
    constructor(options) {
        if (options.epoch && options.epoch > 0) {
            this.epoch = options.epoch;
        }
        if (options.workerId && options.workerId > 0) {
            this.workerId = options.workerId;
        }
        if (options.datacenterId && options.datacenterId > 0) {
            this.datacenterId = options.datacenterId;
        }
    }
    nextId() {
        let timestamp = this.currentTimestamp();
        if (this.lastTimestamp === timestamp) {
            this.sequence = (this.sequence + 1) & this.maxSequence;
            if (this.sequence == 0) {
                timestamp = this.tilNextMillis(this.lastTimestamp);
            }
        }
        else {
            this.sequence = 1;
            this.lastTimestamp = timestamp;
        }
        this.lastTimestamp = timestamp;
        return BigInt(BigInt((timestamp - this.epoch) << BigInt(this.timestampLeftShift)) |
            BigInt(this.datacenterId << this.datacenterIdLeftShift) |
            BigInt(this.workerId << this.workerIdLeftShift) |
            BigInt(this.sequence));
    }
    tilNextMillis(lastTimestamp) {
        let timestamp = this.currentTimestamp();
        while (timestamp <= lastTimestamp) {
            timestamp = this.currentTimestamp();
        }
        return timestamp;
    }
    currentTimestamp() {
        return BigInt(Date.now());
    }
}
exports.Snowflake = Snowflake;
//# sourceMappingURL=snowflake.js.map