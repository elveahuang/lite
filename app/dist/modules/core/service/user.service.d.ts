import { EntityService } from '@/commons/service/entity.service';
import { UserCheckDto } from '@/modules/core/domain/dto/user-check.dto';
import { UserDetailsDto } from '@/modules/core/domain/dto/user-details.dto';
import { UserListDto } from '@/modules/core/domain/dto/user-list.dto';
import { UserRegisterDto } from '@/modules/core/domain/dto/user-register.dto';
import { UserSaveDto } from '@/modules/core/domain/dto/user-save.dto';
import { UserEntity } from '@/modules/core/domain/entity/user.entity';
import { AuthorityRepository } from '@/modules/core/repository/authority.repository';
import { RoleRepository } from '@/modules/core/repository/role.repository';
import { UserRepository } from '@/modules/core/repository/user.repository';
export declare class UserService extends EntityService<UserEntity, UserRepository> {
    readonly userRepository: UserRepository;
    readonly roleRepository: RoleRepository;
    readonly authorityRepository: AuthorityRepository;
    constructor(userRepository: UserRepository, roleRepository: RoleRepository, authorityRepository: AuthorityRepository);
    checkUsername(dto: UserCheckDto): Promise<boolean>;
    search(pagination?: UserListDto): Promise<[UserEntity[], number]>;
    register(dto: UserRegisterDto): Promise<void>;
    findByUsername(username: string): Promise<UserEntity>;
    saveUser(dto: UserSaveDto): Promise<void>;
    toDetailsDto(entity: UserEntity): UserDetailsDto;
}
