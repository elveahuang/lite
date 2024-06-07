import { AuthorityEntity } from '@/modules/core/domain/entity/authority.entity';
import { Repository } from 'typeorm';
export interface AuthorityRepository extends Repository<AuthorityEntity> {
    this: Repository<AuthorityEntity>;
    findByUserId(userId: bigint): Promise<AuthorityEntity[]>;
}
export declare const AuthorityRepositoryImpl: Pick<AuthorityRepository, any>;
