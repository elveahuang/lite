import { UserEntity } from '@/modules/core/domain/entity/user.entity';
import { UserSearchRequest } from '@/modules/core/domain/request/user-search-request';
import { AuthorityRepository } from '@/modules/core/repository/authority.repository';
import { RoleRepository } from '@/modules/core/repository/role.repository';
import { UserRepository } from '@/modules/core/repository/user.repository';
export declare class UserService {
    private readonly userRepository;
    private readonly roleRepository;
    private readonly authorityRepository;
    constructor(userRepository: UserRepository, roleRepository: RoleRepository, authorityRepository: AuthorityRepository);
    search(request: UserSearchRequest): Promise<UserEntity[]>;
    findByUsername(username: string): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
    test(): Promise<void>;
}
