import { SequenceService } from '@/commons/service/sequence.service';
import { CredentialsDto } from '@/modules/auth/dto/credentials.dto';
import { AuthService } from '@/modules/auth/service/auth.service';
import { ConfigService } from '@nestjs/config';
export declare class AuthController {
    private readonly configService;
    private readonly sequenceService;
    private readonly authService;
    constructor(configService: ConfigService, sequenceService: SequenceService, authService: AuthService);
    login(reg: any): Promise<any>;
    token(credentialsDto: CredentialsDto): Promise<any>;
    me(req: any): Promise<any>;
}
