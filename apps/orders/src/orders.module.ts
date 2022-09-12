import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      cors: false,
      autoSchemaFile: true,
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
})
export class OrdersModule {}
