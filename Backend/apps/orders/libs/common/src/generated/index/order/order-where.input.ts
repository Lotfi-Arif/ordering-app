import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class OrderWhereInput {

    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    price?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;
}
