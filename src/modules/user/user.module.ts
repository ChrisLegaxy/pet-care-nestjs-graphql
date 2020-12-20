/**
 * @file - User's Module
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

/**
 * * Node Package Imports
 */
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * * Nest Module Imports
 */
import { AuthModule } from '../auth/auth.module';

import { PetModule } from '../pet/pet.module';

/**
 * * Internal Imports
 */
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

/**
 * @module User
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    forwardRef(() => PetModule),
    forwardRef(() => AuthModule)
  ],
  providers: [UserService, UserResolver],
  exports: [UserService]
})
export class UserModule {}
