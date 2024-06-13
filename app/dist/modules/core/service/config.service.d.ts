import { EntityService } from '@/commons/service/entity.service';
import { ConfigEntity } from '@/modules/core/domain/entity/config.entity';
import { ConfigRepository } from '@/modules/core/repository/config.repository';
export declare class ConfigService extends EntityService<ConfigEntity, ConfigRepository> {
    readonly configRepository: ConfigRepository;
    constructor(configRepository: ConfigRepository);
}
