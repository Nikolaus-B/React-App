import { Test, TestingModule } from '@nestjs/testing';
import { PocService } from './poc.service';

describe('PocService', () => {
  let service: PocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PocService],
    }).compile();

    service = module.get<PocService>(PocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
