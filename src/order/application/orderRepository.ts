import Order from "../../shared/domain/value-objects/order";

export default interface OrderRepository {
    savedOrders: Array<Order>
    save(data: Order): void
}
