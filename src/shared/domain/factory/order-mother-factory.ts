import CustomerId from "../value-objects/customerId";
import Item from "../value-objects/item-value-object";
import MoneyValueObject from "../value-objects/money-value-object";
import Order from "../value-objects/order";

export default class OrderMotherFactory {
    public readonly customerId: CustomerId;
    public readonly status: string;
    public readonly item: [];


    private constructor(customerId: CustomerId, status: string, item: []) {
        this.customerId = customerId;
        this.status = status;
        this.item = item;
    }

    public static create( productId: string, quantity: number, price: MoneyValueObject, orderDraft: Order ): Order {
        if (orderDraft.status !== "draft") {
            throw new Error("the order must be in draft status");
        }

        const status = "created";
        const item: Array<Item> = [
        new Item(productId, quantity, price.amount)
        ];

        return new Order(orderDraft.customerId, status, item);
    }

    public static draft(): Order {
        const customerId = new CustomerId('550e8400-e29b-41d4-a716-446655440095');
        const status = 'draft';
        const item:  Array<Item> = [];
        return new Order(customerId, status, item);
    }
    
    public static withItems(orderDraft: Order,productId: string,price: MoneyValueObject,quantity: number): Order {
        if (orderDraft.status !== "draft") {
            throw new Error("the order must be in draft status"); 
        }

        let itemFound = false;

        for (let i = 0; i < orderDraft.item.length; i++) {
        if (orderDraft.item[i]?.productId === productId) {
            orderDraft.item[i]!.quantity += quantity;
            itemFound = true;
            break;
        }
        }

        if (!itemFound) {
        orderDraft.item.push(
            new Item(productId, quantity, price.amount)
        );
        }

        orderDraft.total.amount = orderDraft.item.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        return orderDraft;
    }

    public static createConfirmedOrder (orderDraft: Order){
        orderDraft.status = "Confirmed"
        return orderDraft
    }

    public static createCancelledOrder (orderDraft: Order){
        orderDraft.status = "Cancelled"
        return orderDraft
    }


};