import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed } from './entities/breed.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BreedService {
  constructor(
    @InjectRepository(Breed)
    private readonly breedRepository: Repository<Breed>,
  ) {}

  async create(createBreedDto: CreateBreedDto) {
    const breed = this.breedRepository.create(createBreedDto);
    return await this.breedRepository.save(breed);
  }

  async findAll() {
    return await this.breedRepository.find();
  }

  async findOne(id: number) {
    return await this.breedRepository.findOneBy({ id });
  }

  async update(id: number, updateBreedDto: UpdateBreedDto) {
    return await this.breedRepository.update(id, updateBreedDto);
  }

  async remove(id: number) {
    return await this.breedRepository.softDelete({ id });
  }
}
