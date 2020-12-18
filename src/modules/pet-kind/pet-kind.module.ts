/**
 * @file - PetKind's Module
 * @description - Nest JS Module
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

/**
 * * Nest JS Module Imports
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * * Internal Imports
 */
import { PetKindRepository } from './pet-kind.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PetKindRepository])
  ]
})
export class PetKindModule {}
