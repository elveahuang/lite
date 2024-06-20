import { EntityService } from '@/commons/service/entity.service';
import { EntityKey } from '@/commons/types';
import { AuthoritySaveDto } from '@/modules/core/domain/dto/authority-save.dto';
import { AuthorityEntity } from '@/modules/core/domain/entity/authority.entity';
import { AuthorityRepository } from '@/modules/core/repository/authority.repository';
export declare class AuthorityService extends EntityService<AuthorityEntity, AuthorityRepository> {
    readonly authorityRepository: AuthorityRepository;
    constructor(authorityRepository: AuthorityRepository);
    saveAuthority(dto: AuthoritySaveDto): Promise<void>;
    findByUserId(userId: EntityKey): Promise<AuthorityEntity[]>;
}
