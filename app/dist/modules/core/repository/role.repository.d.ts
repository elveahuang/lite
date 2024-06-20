import { EntityKey } from '@/commons/types';
import { RoleEntity } from '@/modules/core/domain/entity/role.entity';
import { Repository } from 'typeorm';
export interface RoleRepository extends Repository<RoleEntity> {
    this: Repository<RoleEntity>;
    findByUserId(userId: EntityKey): Promise<RoleEntity[]>;
}
export declare const RoleRepositoryImpl: Pick<RoleRepository, any>;
