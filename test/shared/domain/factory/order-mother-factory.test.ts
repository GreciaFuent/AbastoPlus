import { describe, it, expect } from "vitest";
import OrderMotherFactory from "../../../../src/shared/domain/factory/order-mother-factory";
import Order from "../../../../src/shared/domain/value-objects/order";
import CustomerId from "../../../../src/shared/domain/value-objects/customerId";
import MoneyValueObject from "../../../../src/shared/domain/value-objects/money-value-object";

describe("OrderMotherFactory", () => {
  describe("draft", () => {
    it("creates order with draft status", () => {
      const order = OrderMotherFactory.draft();

      expect(order.status).toBe("draft");
      expect(order.item).toHaveLength(0);
      expect(order.customerId).toBeInstanceOf(CustomerId);
    });
  });

  describe("create", () => {
    it("creates order from draft order", () => {
      const draft = OrderMotherFactory.draft();
      const price = new MoneyValueObject(100, "USD");

      const order = OrderMotherFactory.create("product-1", 2, price, draft);

      expect(order.status).toBe("created");
      expect(order.customerId).toEqual(draft.customerId);
      expect(order.item).toHaveLength(1);
      expect(order.item[0]!.productId).toBe("product-1");
      expect(order.item[0]!.quantity).toBe(2);
      expect(order.item[0]!.price).toBe(100);
    });

    it("throws error when order is not draft", () => {
      const customerId = new CustomerId("550e8400-e29b-41d4-a716-446655440095");
      const order = new Order(customerId, "created", []);
      const price = new MoneyValueObject(100, "USD");

      expect(() =>
        OrderMotherFactory.create("product-1", 2, price, order)
      ).toThrow("the order must be in draft status");
    });
  });

  describe("withItems", () => {
    it("adds item to draft order", () => {
      const draft = OrderMotherFactory.draft();
      const price = new MoneyValueObject(100, "USD");

      const order = OrderMotherFactory.withItems(
        draft,
        "product-1",
        price,
        2
      );

      expect(order.item).toHaveLength(1);
      expect(order.item[0]!.productId).toBe("product-1");
      expect(order.item[0]!.quantity).toBe(2);
      expect(order.item[0]!.price).toBe(100);
    });

    it("increases quantity when product already exists", () => {
      const draft = OrderMotherFactory.draft();
      const price = new MoneyValueObject(100, "USD");

      OrderMotherFactory.withItems(draft, "product-1", price, 2);
      const order = OrderMotherFactory.withItems(draft, "product-1", price, 3);

      expect(order.item).toHaveLength(1);
      expect(order.item[0]!.productId).toBe("product-1");
      expect(order.item[0]!.quantity).toBe(5);
      expect(order.item[0]!.price).toBe(100);
    });

    it("adds another item when product does not exist", () => {
      const draft = OrderMotherFactory.draft();
      const price =  new MoneyValueObject(100, "USD");

      OrderMotherFactory.withItems(draft, "product-1", price, 2);
      const order = OrderMotherFactory.withItems(draft, "product-2", price, 1);

      expect(order.item).toHaveLength(2);
      expect(order.item[0]!.productId).toBe("product-1");
      expect(order.item[1]!.productId).toBe("product-2");
    });

    it("throws error when order is not draft", () => {
      const customerId = new CustomerId("550e8400-e29b-41d4-a716-446655440095");
      const order = new Order(customerId, "created", []);
      const price = new MoneyValueObject(100, "USD");

      expect(() =>
        OrderMotherFactory.withItems(order, "product-1", price, 2)
      ).toThrow("the order must be in draft status");
    });
  });

  describe("createConfirmedOrder", () => {
    it("changes order status to Confirmed", () => {
      const draft = OrderMotherFactory.draft();

      const order = OrderMotherFactory.createConfirmedOrder(draft);

      expect(order.status).toBe("Confirmed");
    });
  });

  describe("createCancelledOrder", () => {
    it("changes order status to Cancelled", () => {
      const draft = OrderMotherFactory.draft();

      const order = OrderMotherFactory.createCancelledOrder(draft);

      expect(order.status).toBe("Cancelled");
    });
  });
});