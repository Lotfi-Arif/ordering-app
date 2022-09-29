import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateInput } from './order-create.input';
import { OrderUpdateInput } from './order-update.input';

@ArgsType()
export class UpsertOneOrderArgs {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateInput, {nullable:false})
    @Type(() => OrderCreateInput)
    create!: OrderCreateInput;

    @Field(() => OrderUpdateInput, {nullable:false})
    @Type(() => OrderUpdateInput)
    update!: OrderUpdateInput;
}