import CustomerId from "./customerId";
import Item from "./item-value-object";

class Order {
  public customerId: CustomerId;
  public status: string;
  public item: Array<Item>;

  constructor(customerId: CustomerId, status: string, item: Array<Item>) {
    this.customerId = customerId;
    this.status = status;
    this.item = item;
  }

  static create(customerId: CustomerId): Order {

    return new Order(customerId, "draft", []);
  }
}

export default Order;