import { AuthorityEntity } from '@/modules/core/entity/authority.entity';
import { AuthorityRepository } from '@/modules/core/repository/authority.repository';
export declare class AuthorityService {
    private readonly authorityRepository;
    constructor(authorityRepository: AuthorityRepository);
    findByUserId(userId: bigint): Promise<AuthorityEntity[]>;
}
