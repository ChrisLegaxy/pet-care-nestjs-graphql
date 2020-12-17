/**
 * @file - Pet's Module
 * @description - Nest JS Module
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest Imports
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * * Pet Imports
 */
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { PetRepository } from './pet.repository';
import { PetResolver } from './pet.resolver';

/**
 * @module Pet
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([PetRepository])
  ],
  providers: [PetService, PetResolver],
  controllers: [PetController]
})
export class PetModule {}
