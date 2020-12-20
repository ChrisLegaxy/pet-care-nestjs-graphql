/**
 * @file - Pet's Module
 * @description - Nest JS Module
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest Package Imports
 */
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * * Nest Module Imports
 */
import { PetKindModule } from '@/modules/pet-kind/pet-kind.module';
import { UserModule } from '@/modules/user/user.module';

/**
 * * Internal Imports
 */
import { PetRepository } from './pet.repository';
import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver';

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
  exports: [PetService]
})
export class PetModule {}
