import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderUpdateInput } from './order-update.input';
import { Type } from 'class-transformer';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@ArgsType()
export class UpdateOneOrderArgs {

    @Field(() => OrderUpdateInput, {nullable:false})
    @Type(() => OrderUpdateInput)
    data!: OrderUpdateInput;

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: OrderWhereUniqueInput;
}
