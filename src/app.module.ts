import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedModule } from './breed/breed.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CatsModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'db_crud',
      // entities:[], //MANUALMENTE SE AGREGA LAS ENTIDADES
      autoLoadEntities:true, 
      synchronize:true, //CUIDADO CON USARLO EN PRODUCCIÓN, PUEDE PERDERSE INFORMACIÓN
    }),
    BreedModule,
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
