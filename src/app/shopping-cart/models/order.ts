import { Customer } from '@app/customer/models/customer';
import { Item } from '@app/items/models/item';

export interface Order {
  id: number;
  createDate: string;
  customer: Customer;
  orderDetail: Array<OrderDetail>;
}

export interface OrderDetail {
  id: number;
  item: Item;
  qtyPurchase: number;
}

export interface Cart {
  items: Item [];
}
