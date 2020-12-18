/**
 * @file - Root Application Module
 * @description - Main root module that import all the modules & more
 * @copyright - CPC
 * @version - 1.0.0
 * @author - Vansen Hengmeanrith aka Chris - chris.vhsmr@gmail.com
 * @since - 17 Dec 2020
 */

 /**
  * * Nest JS Module Imports
  */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * * Application Module Imports
 */
import { PetModule } from './modules/pet/pet.module';
import { PetKindModule } from './modules/pet-kind/pet-kind.module';

/**
 * * Other Imports
 */
import { join } from 'path';

/**
 * @module AppModule
 */
@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest_graphql',
      entities: ['dist/**/*.model.js'],
      synchronize: true
    }),
    PetModule,
    PetKindModule
  ]
})
export class AppModule {}
