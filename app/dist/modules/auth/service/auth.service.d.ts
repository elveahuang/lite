import { Principal } from '@/commons/security/principal';
import { R } from '@/commons/types';
import { RequestContext } from '@/commons/web/request-context';
import { CredentialsDto } from '@/modules/auth/dto/credentials.dto';
import { JwtPayload, JwtResponse } from '@/modules/auth/passport/jwt.type';
import { AuthorityService } from '@/modules/core/service/authority.service';
import { RoleService } from '@/modules/core/service/role.service';
import { UserSessionService } from '@/modules/core/service/user-session.service';
import { UserService } from '@/modules/core/service/user.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    private configService;
    private userSessionService;
    private userService;
    private roleService;
    private authorityService;
    constructor(jwtService: JwtService, configService: ConfigService, userSessionService: UserSessionService, userService: UserService, roleService: RoleService, authorityService: AuthorityService);
    createAccessToken(payload: JwtPayload): string;
    createRefreshToken(payload: JwtPayload): string;
    hasAnyRoles(principal: Principal, roles: string[] | string): boolean;
    hasAnyAuthorities(principal: Principal, authorities: string[] | string): boolean;
    validate(accessToken: string): Promise<Principal>;
    auth(credentials: CredentialsDto, context?: RequestContext): Promise<R<JwtResponse>>;
}
