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
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * * Pet Imports
 */
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { PetRepository } from './pet.repository';
import { PetResolver } from './pet.resolver';
import { PetKindModule } from '../pet-kind/pet-kind.module';
import { UserModule } from '../user/user.module';

/**
 * @module Pet
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([PetRepository]),
    PetKindModule,
    forwardRef(() => UserModule)
  ],
  providers: [PetService, PetResolver],
  controllers: [PetController],
  exports: [PetService]
})
export class PetModule {}
