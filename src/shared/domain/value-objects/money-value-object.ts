class MoneyValueObject {
  public readonly amount: number;
  public readonly currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  static create(amount: number, currency: string): MoneyValueObject {
    if (amount < 0) {
      throw new Error("the amount must be greater than 0");
    }

    return new MoneyValueObject(amount, currency);
  }

  add(other: MoneyValueObject): MoneyValueObject {
    if (this.currency !== other.currency) {
      throw new Error("the currency must be the same");
    }

    return new MoneyValueObject(this.amount + other.amount, this.currency);
  }

  equals(other: MoneyValueObject): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }
}

export default MoneyValueObject;