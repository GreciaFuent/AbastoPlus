import CustomerId from "./customerId";
import Item from "./item-value-object";

class Order {
  public customerId: CustomerId;
  public status: string;
  public item: Array<Item>;
  public total: { amount: number } = { amount: 0 };

  constructor(customerId: CustomerId, status: string, item: Array<Item>) {
    this.customerId = customerId;
    this.status = status;
    this.item = item;
    this.recalculateTotal();
  }

  static create(customerId: CustomerId): Order {
    return new Order(customerId, "draft", []);
  }

  recalculateTotal(): void {
    this.total.amount = this.item.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );
  }
}

export default Order;