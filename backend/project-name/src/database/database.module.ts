/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Products from 'src/entity/product.entity';
import Users from 'src/entity/user.entity';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        entities: [Users, Products],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
