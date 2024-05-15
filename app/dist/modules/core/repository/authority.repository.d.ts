import { AuthorityEntity } from '@/modules/core/entity/authority.entity';
import { Repository } from 'typeorm';
export interface AuthorityRepository extends Repository<AuthorityEntity> {
    this: Repository<AuthorityEntity>;
    findByUserId(userId: bigint): Promise<AuthorityEntity[]>;
}
export declare const CustomAuthorityRepository: Pick<AuthorityRepository, any>;
