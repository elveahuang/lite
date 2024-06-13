import { EntityService } from '@/commons/service/entity.service';
import { BannerSaveDto } from '@/modules/banner/domain/dto/banner-save.dto';
import { BannerEntity } from '@/modules/banner/domain/entity/banner.entity';
import { BannerRepository } from '@/modules/banner/repository/banner.repository';
export declare class BannerService extends EntityService<BannerEntity, BannerRepository> {
    readonly bannerRepository: BannerRepository;
    constructor(bannerRepository: BannerRepository);
    saveBanner(dto: BannerSaveDto): Promise<void>;
}
