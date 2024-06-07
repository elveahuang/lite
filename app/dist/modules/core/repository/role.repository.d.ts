import { RoleEntity } from '@/modules/core/domain/entity/role.entity';
import { Repository } from 'typeorm';
export interface RoleRepository extends Repository<RoleEntity> {
    this: Repository<RoleEntity>;
    findByUserId(userId: bigint): Promise<RoleEntity[]>;
}
export declare const RoleRepositoryImpl: Pick<RoleRepository, any>;
