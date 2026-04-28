class Item {
  public readonly productId: string;
  public quantity: number;
  public readonly price: number;

  constructor(productId: string, quantity: number, price: number) {
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
  }

  static create(productId: string, quantity: number, price: number): Item {
    return new Item(productId, quantity, price);
  }
}

export default Item;