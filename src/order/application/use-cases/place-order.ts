import { inject, injectable } from "inversify";
import type OrderRepository from "../orderRepository";
import type OrderProductRepository from "../orderProductRepository";
import CustomerId from "../../../shared/domain/value-objects/customerId";
import MoneyValueObject from "../../../shared/domain/value-objects/money-value-object";
import Order from "../../../shared/domain/value-objects/order";
import OrderMotherFactory from "../../../shared/domain/factory/order-mother-factory";

type PlaceOrderItem = {
    productId: string
    quantity: number
}

type PlaceOrderCommand = {
    customerId: string
    items: Array<PlaceOrderItem>
}

@injectable()
export default class PlaceOrder {
    constructor(
        @inject("OrderRepository") private readonly orderRepository: OrderRepository,
        @inject("OrderProductRepository") private readonly productRepository: OrderProductRepository
    ) {}

    execute(command: PlaceOrderCommand): Order {
        const order = Order.create(new CustomerId(command.customerId))

        for (const item of command.items) {
            const product = this.productRepository.findById(item.productId)

            if (!product) {
                throw new Error("Product not found")
            }

            const price = MoneyValueObject.create(product.price, "USD")
            OrderMotherFactory.withItems(order, item.productId, price, item.quantity)
        }

        this.orderRepository.save(order)

        return order
    }
}
