import { UserEntity } from '@/modules/core/entity/user.entity';
import { AuthorityRepository } from '@/modules/core/repository/authority.repository';
import { RoleRepository } from '@/modules/core/repository/role.repository';
import { UserRepository } from '@/modules/core/repository/user.repository';
export declare class UserService {
    private readonly userRepository;
    private readonly roleRepository;
    private readonly authorityRepository;
    constructor(userRepository: UserRepository, roleRepository: RoleRepository, authorityRepository: AuthorityRepository);
    findByUsername(username: string): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
    test(): Promise<void>;
}
