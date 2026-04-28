import { BusRepository } from "./bus-repository";
import { SubscriptionRepository } from "./suscription-repository";

export class EventBus<T> implements BusRepository<T> { 
    private events: Array<{ key: string; payload: {} }>;
    private suscribers: Array<{name: string; notification: Array<SubscriptionRepository<T>>}>

    constructor(){
        this.events = []
        this.suscribers = []
    }

    publish(key: string, payload: {}): void { 
        this.events.push({ key, payload });
    }
    
    suscribe(name:string, notification: Array<SubscriptionRepository<T>>) {

        this.suscribers.push({name, notification })
    }

    consume(key: string, limit: number): Array<{ key: string; payload: {} }> {
        const consumedEvents: Array<{ key: string; payload: {} }> = [];
        let contador = 0;

        this.events = this.events.filter((element) => {

            if (element.key === key && contador < limit) {

                consumedEvents.push(element);

                this.suscribers.forEach((suscriber) => {
                    suscriber.notification.forEach((service) => {
                        console.log("suscriptor", service)
                        service.execute(element.key, element.payload);
                    });
                });

                contador += 1;
                return false; 
            }

            return true; 
        });

        return consumedEvents;
    }
        
}