import { describe, it, expect} from "vitest";
import MoneyValueObject  from "../../../../src/shared/domain/value-objects/money-value-object";



describe('Money', () => {
  describe('create', () => {
    it('creates money with valid amount', () => {
      const money = MoneyValueObject.create(10.50, 'USD');

      expect(money.amount).toBe(10.50);
      expect(money.currency).toBe('USD');
    });

    it('throws for negative amount', () => {
      expect(() => MoneyValueObject.create(-1, 'USD')).toThrow(Error);
    });
  });

  describe('add', () => {
    it('adds two money values with same currency', () => {
      const a = MoneyValueObject.create(10, 'USD');
      const b = MoneyValueObject.create(20, 'USD');
    });
  });
});

describe('add', () => {
  it('adds two money values with same currency', () => {
    const a = MoneyValueObject.create(10, 'USD');
    const b = MoneyValueObject.create(20, 'USD');

    const result = a.add(b);

    expect(result.amount).toBe(30);
    expect(result.currency).toBe('USD');
  });

  it('throws for different currencies', () => {
    const usd = MoneyValueObject.create(10, 'USD');
    const eur = MoneyValueObject.create(10, 'EUR');

    expect(() => usd.add(eur)).toThrow(Error);
  });
});


describe('equality', () => {
  it('equals money with same amount and currency', () => {
    const a = MoneyValueObject.create(10, 'USD');
    const b = MoneyValueObject.create(10, 'USD');

    expect(a.equals(b)).toBe(true);
  });

  it('not equal with different amount', () => {
    const a = MoneyValueObject.create(10, 'USD');
    const b = MoneyValueObject.create(20, 'USD');

    expect(a.equals(b)).toBe(false);
  });
});