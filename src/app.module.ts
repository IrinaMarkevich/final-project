import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { User } from './user/user.entity'
// import { Product } from './product/product.entity'
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'postgres',
      host: 'localhost',
    entities: [User, /*Product*/],
      // migrationsTableName: "migration",
      migrations: ['./dist/migration/*.js'],
      synchronize: false,
      cli: {
        migrationsDir: './src/migration'
      },
      migrationsRun: true
    }),
    UserModule,
    ProductModule,
    AuthModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
