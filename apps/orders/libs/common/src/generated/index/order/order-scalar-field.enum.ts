import { registerEnumType } from '@nestjs/graphql';

export enum OrderScalarFieldEnum {
    id = "id",
    name = "name",
    price = "price",
    phoneNumber = "phoneNumber"
}


registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
