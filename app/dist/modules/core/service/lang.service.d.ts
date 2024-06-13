import { EntityService } from '@/commons/service/entity.service';
import { LangEntity } from '@/modules/core/domain/entity/lang.entity';
import { LangRepository } from '@/modules/core/repository/lang.repository';
export declare class LangService extends EntityService<LangEntity, LangRepository> {
    readonly langRepository: LangRepository;
    constructor(langRepository: LangRepository);
}
