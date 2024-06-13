import { Page, R } from '@/commons/types';
import { AnnouncementListDto } from '@/modules/announcement/domain/dto/announcement-list.dto';
import { UserProfileDto } from '@/modules/core/domain/dto/user-profile.dto';
import { UserRegisterDto } from '@/modules/core/domain/dto/user-register.dto';
import { UserEntity } from '@/modules/core/domain/entity/user.entity';
import { UserService } from '@/modules/core/service/user.service';
export declare class UserAppController {
    private readonly userService;
    constructor(userService: UserService);
    list(dto: AnnouncementListDto): Promise<R<Page<UserEntity>>>;
    register(dto: UserRegisterDto): Promise<R>;
    profile(): Promise<R<UserProfileDto>>;
}
