import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueOrderArgs {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: OrderWhereUniqueInput;
}
