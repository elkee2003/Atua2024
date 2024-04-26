import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum AtuaType {
  WALK = "WALK",
  BIKE = "BIKE",
  CAR = "CAR",
  GROUP = "GROUP"
}

export enum OrderStatus {
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  ACCEPTED = "ACCEPTED",
  PICKEDUP = "PICKEDUP",
  DELIVERED = "DELIVERED"
}



type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipientName: string;
  readonly recipientNumber: string;
  readonly orderDetails?: string | null;
  readonly total?: number | null;
  readonly originPlace?: string | null;
  readonly destinationPlace?: string | null;
  readonly atuaType?: AtuaType | keyof typeof AtuaType | null;
  readonly status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipientName: string;
  readonly recipientNumber: string;
  readonly orderDetails?: string | null;
  readonly total?: number | null;
  readonly originPlace?: string | null;
  readonly destinationPlace?: string | null;
  readonly atuaType?: AtuaType | keyof typeof AtuaType | null;
  readonly status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly name?: string | null;
  readonly phoneNumber?: string | null;
  readonly address?: string | null;
  readonly lng?: number | null;
  readonly lat?: number | null;
  readonly Orders?: (Order | null)[] | null;
  readonly type?: AtuaType | keyof typeof AtuaType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly name?: string | null;
  readonly phoneNumber?: string | null;
  readonly address?: string | null;
  readonly lng?: number | null;
  readonly lat?: number | null;
  readonly Orders: AsyncCollection<Order>;
  readonly type?: AtuaType | keyof typeof AtuaType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}