import { IdEntity } from '@/commons/entity/id.entity';
export declare class UserEntity extends IdEntity {
    username: string;
    password: string;
    name: string;
    displayName: string;
    email: string;
    mobileCountryCode: string;
    mobileNumber: string;
    idCardType: string;
    idCardNo: string;
    sex: string;
    birthday: string;
    description: string;
}
