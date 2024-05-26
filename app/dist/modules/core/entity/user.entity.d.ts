import { BaseEntity } from '@/commons/entity/base.entity';
export declare class UserEntity extends BaseEntity {
    username: string;
    name: string;
    displayName: string;
    email: string;
    mobileCountryCode: string;
    mobileNumber: string;
    password: string;
    idCardType: string;
    idCardNo: string;
    sex: string;
    birthday: Date;
    description: string;
    lastLoginStatus: number;
    lastLoginAt: Date;
    passwordExpireAt: Date;
    passwordErrorAt: Date;
    passwordErrorCount: number;
    status: number;
    source: number;
}
