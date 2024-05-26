import { LangEntity } from '@/modules/core/entity/lang.entity';
import { Repository } from 'typeorm';
export interface LangRepository extends Repository<LangEntity> {
    this: Repository<LangEntity>;
}
export declare const CustomLangRepository: Pick<LangRepository, any>;
