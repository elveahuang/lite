import { UserRoleEntity } from '@/modules/core/domain/entity/user-role.entity';
import { Repository } from 'typeorm';
export interface UserRoleRepository extends Repository<UserRoleEntity> {
    this: Repository<UserRoleEntity>;
}
export declare const UserRoleRepositoryImpl: Pick<UserRoleRepository, any>;
