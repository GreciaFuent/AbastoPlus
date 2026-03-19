export interface BusRepository<T> { 
    publish(key: string, payload: Array<T>): void;
    // suscribe(name:string, notification: Array<void>)
}

