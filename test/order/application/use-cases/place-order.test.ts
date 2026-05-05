import { describe, it, expect, beforeEach } from "vitest"
import PlaceOrder from "../../../../src/order/application/use-cases/place-order"
import type OrderRepository from "../../../../src/order/application/orderRepository"
import type OrderProductRepository from "../../../../src/order/application/orderProductRepository"
import Product from "../../../../src/order/domain/product"
import type Order from "../../../../src/shared/domain/value-objects/order"

class MockOrderRepository implements OrderRepository {
    public savedOrders: Order[] = []
    private errorOnSave = false

    save(data: Order): void {
        if (this.errorOnSave) {
            throw new Error("Error saving order")
        }

        this.savedOrders.push(data)
    }

    simulateErrorOnSave(): void {
        this.errorOnSave = true
    }
}

class MockProductRepository implements OrderProductRepository {
    private products: Product[] = []

    save(data: Product): void {
        this.products.push(data)
    }

    findById(productId: string): Product | null {
        return this.products.find(product => product.productId === productId) ?? null
    }

    addProduct(product: Product): void {
        this.save(product)
    }
}

const createTestProduct = (productId: string, price: number): Product => {
    return new Product(productId, price)
}

describe("PlaceOrder", () => {
    let placeOrder: PlaceOrder
    let orderRepo: MockOrderRepository
    let productRepo: MockProductRepository

    beforeEach(() => {
        orderRepo = new MockOrderRepository()
        productRepo = new MockProductRepository()

        placeOrder = new PlaceOrder(
            orderRepo,
            productRepo
        )
    })

    it("creates order with items and saves", () => {
        productRepo.addProduct(createTestProduct("550e8400-e29b-41d4-a716-446655440000", 10.00))
        productRepo.addProduct(createTestProduct("550e8400-e29b-41d4-a716-446655440001", 20.00))

        const command = {
            customerId: "550e8400-e29b-41d4-a716-446655440000",
            items: [
                { productId: "550e8400-e29b-41d4-a716-446655440000", quantity: 2 },
                { productId: "550e8400-e29b-41d4-a716-446655440001", quantity: 1 },
            ],
        }

        const order = placeOrder.execute(command)

        expect(order).toBeDefined()

        const savedOrder = orderRepo.savedOrders[0]

        expect(savedOrder).not.toBeNull()
        expect(savedOrder!.item).toHaveLength(2)
        expect(savedOrder!.total.amount).toBe(40)
    })

    it("throws when product not found", () => {
        const command = {
            customerId: "550e8400-e29b-41d4-a716-446655440000",
            items: [{ productId: "nonexistent", quantity: 1 }],
        }

        expect(() => placeOrder.execute(command)).toThrow("Product not found")
    })

    it("rolls back on error", () => {
        productRepo.addProduct(createTestProduct("550e8400-e29b-41d4-a716-446655440000", 10.00))
        orderRepo.simulateErrorOnSave()

        const command = {
            customerId: "550e8400-e29b-41d4-a716-446655440000",
            items: [{ productId: "550e8400-e29b-41d4-a716-446655440000", quantity: 1 }],
        }

        expect(() => placeOrder.execute(command)).toThrow()
        expect(orderRepo.savedOrders).toHaveLength(0)
    })
})