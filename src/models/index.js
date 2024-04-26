// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AtuaType = {
  "WALK": "WALK",
  "BIKE": "BIKE",
  "CAR": "CAR",
  "GROUP": "GROUP"
};

const OrderStatus = {
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "ACCEPTED": "ACCEPTED",
  "PICKEDUP": "PICKEDUP",
  "DELIVERED": "DELIVERED"
};

const { Order, User } = initSchema(schema);

export {
  Order,
  User,
  AtuaType,
  OrderStatus
};