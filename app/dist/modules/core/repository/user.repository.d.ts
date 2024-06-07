import { UserEntity } from '@/modules/core/domain/entity/user.entity';
import { Repository } from 'typeorm';
export interface UserRepository extends Repository<UserEntity> {
    this: Repository<UserEntity>;
    findByUsername(username: string): Promise<UserEntity>;
}
export declare const UserRepositoryImpl: Pick<UserRepository, any>;
