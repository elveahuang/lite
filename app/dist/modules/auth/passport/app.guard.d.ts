import { AuthService } from '@/modules/auth/service/auth.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class AppAuthGuard implements CanActivate {
    private readonly reflector;
    private readonly authService;
    constructor(reflector: Reflector, authService: AuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
