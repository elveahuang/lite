import { ConfigEntity } from '@/modules/core/entity/config.entity';
import { Repository } from 'typeorm';
export interface ConfigRepository extends Repository<ConfigEntity> {
    this: Repository<ConfigEntity>;
}
export declare const CustomConfigRepository: Pick<ConfigRepository, any>;
