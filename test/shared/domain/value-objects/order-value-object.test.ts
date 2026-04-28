import { describe, it, expect} from "vitest";
import Order  from "../../../../src/shared/domain/value-objects/order";
import CustomerId from "../../../../src/shared/domain/value-objects/customerId";



describe('Order', () => {
  describe('create', () => {
    it('creates order with draft status', () => {
      const customerId = new CustomerId('550e8400-e29b-41d4-a716-446655440095');

      const order = Order.create(customerId);

      expect(order.status).toBe('draft');
      expect(order.customerId).toEqual(customerId);
      expect(order.item).toHaveLength(0);
    });
  })});