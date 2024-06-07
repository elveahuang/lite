import { ConfigEntity } from '@/modules/core/domain/entity/config.entity';
import { Repository } from 'typeorm';
export interface ConfigRepository extends Repository<ConfigEntity> {
    this: Repository<ConfigEntity>;
}
export declare const ConfigRepositoryImpl: Pick<ConfigRepository, any>;
